import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Grommet } from 'grommet';
import Home from './Home';
import Anchor from './Anchor';
import Box from './Box';
import Button from './Button';
import Calendar from './Calendar';
import Carousel from './Carousel';
import Chart from './Chart';
import CheckBox from './CheckBox';
import Clock from './Clock';
import DateInput from './DateInput';
import Diagram from './Diagram';
import Distribution from './Distribution';
import DropButton from './DropButton';
import DropButtonAirlines from './DropButtonAirlines';
import DropButtonLabels from './DropButtonLabels';
import Form from './Form';
import FormField from './FormField';
import Grid from './Grid';
import Heading from './Heading';
import Image from './Image';
import InfiniteScroll from './InfiniteScroll';
import Layer from './Layer';
import Markdown from './Markdown';
import Menu from './Menu';
import Meter from './Meter';
import Paragraph from './Paragraph';
import RadioButton from './RadioButton';
import RangeInput from './RangeInput';
import RangeSelector from './RangeSelector';
import Select from './Select';
import SelectCreditCard from './SelectCreditCard';
import Stack from './Stack';
import Table from './Table';
import TableFancy from './TableFancy';
import Text from './Text';
import TextArea from './TextArea';
import TextInput from './TextInput';
import Video from './Video';
import WorldMap from './WorldMap';

export default class Sandbox extends Component {
  constructor(props) {
    super(props);
    const history = createBrowserHistory({ basename: props.routePrefix });
    this.state = { history };
  }
  render() {
    const { history } = this.state;
    return (
      <Router history={history}>
        <Grommet full={true}>
          <Switch>
            <Route exact={true} path='/' component={Home} />
            <Route exact={true} path='/box' component={Box} />
            <Route exact={true} path='/grid' component={Grid} />
            <Route exact={true} path='/infinitescroll' component={InfiniteScroll} />
            <Route exact={true} path='/layer' component={Layer} />
            <Route exact={true} path='/stack' component={Stack} />

            <Route exact={true} path='/heading' component={Heading} />
            <Route exact={true} path='/markdown' component={Markdown} />
            <Route exact={true} path='/paragraph' component={Paragraph} />
            <Route exact={true} path='/text' component={Text} />

            <Route exact={true} path='/anchor' component={Anchor} />
            <Route exact={true} path='/button' component={Button} />
            <Route exact={true} path='/dropbutton' component={DropButton} />
            <Route exact={true} path='/dropbutton-airlines' component={DropButtonAirlines} />
            <Route exact={true} path='/dropbutton-labels' component={DropButtonLabels} />
            <Route exact={true} path='/menu' component={Menu} />

            <Route exact={true} path='/checkbox' component={CheckBox} />
            <Route exact={true} path='/rangeinput' component={RangeInput} />
            <Route exact={true} path='/radiobutton' component={RadioButton} />
            <Route exact={true} path='/select' component={Select} />
            <Route exact={true} path='/select-creditcard' component={SelectCreditCard} />
            <Route exact={true} path='/textarea' component={TextArea} />
            <Route exact={true} path='/textinput' component={TextInput} />

            <Route exact={true} path='/calendar' component={Calendar} />
            <Route exact={true} path='/chart' component={Chart} />
            <Route exact={true} path='/clock' component={Clock} />
            <Route exact={true} path='/diagram' component={Diagram} />
            <Route exact={true} path='/distribution' component={Distribution} />
            <Route exact={true} path='/meter' component={Meter} />
            <Route exact={true} path='/rangeselector' component={RangeSelector} />
            <Route exact={true} path='/worldmap' component={WorldMap} />

            <Route exact={true} path='/carousel' component={Carousel} />
            <Route exact={true} path='/image' component={Image} />
            <Route exact={true} path='/video' component={Video} />

            <Route exact={true} path='/dateinput' component={DateInput} />
            <Route exact={true} path='/formfield' component={FormField} />
            <Route exact={true} path='/form' component={Form} />

            <Route exact={true} path='/table' component={Table} />
            <Route exact={true} path='/table-fancy' component={TableFancy} />

          </Switch>
        </Grommet>
      </Router>
    );
  }
}
