import { BenchmarkMeasurements, Measurement, WritableMeasurementKeys } from '@benchmarking-apps/test-result';
import { bindable, customElement, ILogger, shadowCSS } from 'aurelia';
import * as d3 from 'd3';
import css from './avg-measurements.css';
import template from './avg-measurements.html';
import { Margin, round } from './shared';

const margin = new Margin(40, 30, 30, 40);
const width = 800;
const height = 600;
const colorBuckets = 4;

class Action {
  public color: string;
  public constructor(
    public readonly description: string,
  ) { }
}
const actions: Record<WritableMeasurementKeys, Action> = {
  'durationInitialLoad': new Action('Initial load'),
  'durationPopulation': new Action('Populate grid'),
  'durationUpdate': new Action('Update every 10th row'),
  'durationShowDetails': new Action('Toggle show details'),
  'durationHideDetails': new Action('Toggle hide details'),
  'durationLocaleDe': new Action('Toggle localize date to \'de\''),
  'durationLocaleEn': new Action('Toggle localize date to \'en\''),
  'durationSortFirstName': new Action('Sort by first name ascending'),
  'durationSortFirstNameDesc': new Action('Sort by first name descending'),
  'durationSortLastName': new Action('Sort by last name ascending'),
  'durationSortLastNameDesc': new Action('Sort by last name descending'),
  'durationSortDob': new Action('Sort by dob ascending'),
  'durationSortDobDesc': new Action('Sort by dob descending'),
  'durationFilterEmployed': new Action('Filter employed'),
  'durationFilterUnemployed': new Action('Filter unemployed'),
  'durationFilterNone': new Action('Filter none'),
  'durationSelectFirst': new Action('Select first row'),
  'durationDeleteFirst': new Action('Delete first row'),
  'durationDeleteAll': new Action('Delete all row'),
};
const sequence: WritableMeasurementKeys[] = Object.keys(actions) as WritableMeasurementKeys[];
const seqLen = sequence.length;
const colorRanges: [number, number][] = new Array<[number, number]>(colorBuckets);
const band = round(1 / colorBuckets);
for (let i = 0; i < colorBuckets; i++) {
  colorRanges[i] = [
    i === 0 ? 0 : round((i * band) + 0.01),
    i === colorBuckets - 1 ? 1 : round((i + 1) * band)
  ];
}
const buckets = new Array<number[]>(colorBuckets);
for (let i = 0; i < seqLen; i++) {
  const j = i % colorBuckets;
  (buckets[j] ?? (buckets[j] = [])).push(i);
}
const colorScales: d3.ScaleBand<number>[] = buckets.map((b, i) => d3.scaleBand(b, colorRanges[i]));
for (let i = 0; i < seqLen; i++) {
  actions[sequence[i]].color = d3.interpolateSpectral(colorScales[i % colorBuckets](i));
}

@customElement({
  name: 'avg-measurements',
  template,
  shadowOptions: { mode: 'open' },
  dependencies: [shadowCSS(css)],
})
export class AvgMeasurements {
  @bindable public readonly data: BenchmarkMeasurements;
  private avgDataset: AvgMeasurement[];
  private readonly target!: HTMLElement;
  private readonly actions = Object.values(actions);
  private svg: d3.Selection<SVGSVGElement, unknown, null, undefined>;

  public constructor(
    @ILogger private readonly logger: ILogger,
  ) {
    this.logger = logger.scopeTo('AvgMeasurements');
  }

  public binding(): void {
    const avgDataset: AvgMeasurement[] = this.avgDataset = [];
    for (const item of this.data.measurements) {
      let avg = avgDataset.find((i) => i.framework === item.framework
        && i.frameworkVersion === item.frameworkVersion
        && i.initialPopulation === item.initialPopulation
        && i.totalPopulation === item.totalPopulation
      );
      if (avg === void 0) {
        avg = new AvgMeasurement(item);
        avgDataset.push(avg);
      } else {
        avg.add(item);
      }
    }
    this.logger.debug('avgDataset', avgDataset);
  }

  public attached(): void {
    const logger = this.logger;
    const gDs = d3.group(this.avgDataset, (d) => `${d.initialPopulation}|${d.totalPopulation}`);
    const stack = d3.stack<AvgMeasurement>().keys(Object.keys(actions));
    const target = this.target;

    for (const [key, ds] of gDs) {
      const series = stack(ds);
      logger.debug('series', series);
      const svg = this.svg = d3.select(target)
        .append('svg')
        .attr('viewBox', `0 0 ${width} ${height}`)
        .attr('height', height)
        .attr('width', width);

      const [p0, pn] = key.split('|');
      svg.append('text')
        .text(`From ${p0} to ${pn}`)
        .attr('x', width / 2)
        .attr('y', margin.top / 2)
        .attr('text-anchor', 'middle');

      const groups = svg.selectAll('g')
        .data(series)
        .enter()
        .append('g')
        .style('fill', function (d) { return actions[d.key as WritableMeasurementKeys].color; });

      const xScale = d3.scaleBand()
        .domain(ds.map(getMeasurementId))
        .range([margin.left, width - margin.right])
        .paddingInner(0.05);
      const yScale = d3.scaleLinear()
        .domain([0, d3.max(ds, function (d) { return d.totalDuration; })!])
        .range([height - margin.bottom, margin.top]);

      groups.selectAll('rect')
        .data(function (d) { return d; })
        .enter()
        .append('rect')
        .attr('x', function (d) { return xScale(d.data.id)!; })
        .attr('y', function (d) { return yScale(d[1]); })
        .attr('width', xScale.bandwidth())
        .attr('height', function (d) { return yScale(d[0]) - yScale(d[1]); })
        .append('title')
        .text(function (d) { return `${round(d[1] - d[0])} ms`; });

      svg.append("g")
        .classed('x-axis', true)
        .attr('transform', `translate(0, ${height - margin.bottom})`)
        .call(d3.axisBottom(xScale));
      svg.append("g")
        .classed('y-axis', true)
        .attr('transform', `translate(${margin.left}, 0)`)
        .call(d3.axisLeft(yScale));
    }
  }

  public detaching(): void {
      this.svg.remove();
  }
}
function getMeasurementId(m: AvgMeasurement): string { return m.id; }
class AvgMeasurement implements Omit<Measurement, 'browser' | 'browserVersion' | 'name' | 'isValid'> {

  public readonly id: string;
  public readonly framework: string;
  public readonly frameworkVersion: string;
  public readonly initialPopulation: number;
  public readonly totalPopulation: number;

  public durationInitialLoad: number = 0;
  public durationPopulation: number = 0;
  public durationUpdate: number = 0;
  public durationShowDetails: number = 0;
  public durationHideDetails: number = 0;
  public durationLocaleDe: number = 0;
  public durationLocaleEn: number = 0;
  public durationSortFirstName: number = 0;
  public durationSortFirstNameDesc: number = 0;
  public durationSortLastName: number = 0;
  public durationSortLastNameDesc: number = 0;
  public durationSortDob: number = 0;
  public durationSortDobDesc: number = 0;
  public durationFilterEmployed: number = 0;
  public durationFilterUnemployed: number = 0;
  public durationFilterNone: number = 0;
  public durationSelectFirst: number = 0;
  public durationDeleteFirst: number = 0;
  public durationDeleteAll: number = 0;

  private count = 0;
  private _totalDuration: number;

  public constructor(
    measurement: Measurement
  ) {
    const fx = measurement.framework;
    const fxVer = measurement.frameworkVersion;
    const p0 = measurement.initialPopulation;
    const pn = measurement.totalPopulation;
    this.framework = fx;
    this.frameworkVersion = fxVer;
    this.initialPopulation = p0;
    this.totalPopulation = pn;
    this.id = `${fx}@${fxVer}`;
    this.add(measurement);
  }

  public add(measurement: Measurement) {
    const n = this.count;
    const n1 = ++this.count;
    for (const [key, value] of Object.entries(measurement)) {
      if (!key.startsWith('duration') || value === void 0) { continue; }
      this[key] = ((this[key] as number * n) + value) / n1;
    }
  }

  public get totalDuration() {
    let totalDuration = this._totalDuration;
    if (totalDuration !== void 0) { return totalDuration; }

    totalDuration = 0;
    for (const [key, value] of Object.entries(this)) {
      if (!key.startsWith('duration') || value === void 0) { continue; }
      totalDuration += value as number;
    }

    return this._totalDuration = totalDuration;
  }
}
