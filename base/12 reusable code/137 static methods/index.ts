import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HtmlReport } from './reportTargets/HtmlReport';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();
const summary = new Summary(new WinsAnalysis('Man United'), new HtmlReport());
summary.buildAndPrintReport(matchReader.matches);

/*0
// Create an object that implements the DataReader interface
const csvFileReader = new CsvFileReader('football.csv');
// Create an object of MatchReader and pass DataReader implementation
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
*/

/*1
const summary = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
  );
*/

//2 const summary = new Summary(new WinsAnalysis('Man United'), new HtmlReport());

/*3
const summary = Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);
*/
