import React, { Component } from 'react';
import './App.css';
import { Input, Button, Select, Radio, Collapse, Card, List, Avatar } from 'antd';
import Column from 'antd/lib/table/Column';

const Search = Input.Search;
const Option = Select.Option;
const Panel = Collapse.Panel;
const provinceData = ['Zhejiang', 'Jiangsu'];
const cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};
const listData = [];
for(let i =0; i < 23; i++){
  listData.push({
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
    content: "ssssss",
  });
}
const { Meta } = Card;
function callback(key) {
  console.log(key);
}
class App extends Component {

  state = {
    cities: cityData[provinceData[0]],
    secondCity: cityData[provinceData[0]][0],
  }

  handleProvinceChange = (value) => {
    this.setState({
      cities: cityData[value],
      secondCity: cityData[value][0],
    });
  }

  onSecondCityChange = (value) => {
    this.setState({
      secondCity: value,
    });
  }

  render() {
    const { cities } = this.state;
    return (
      <div className="App">
        <Search 
          placeholder="关键字: 学校/姓名"
          enterButton="搜索"
          size="large"
          onSearch={value => console.log(value)}
        />
        <div className="selectTerm clearfix">
          <span>学期选择</span>
          <Button type="primary">2019春</Button>
          <Button>2018秋</Button>
          <Button>2018春</Button>
        </div>

        <div className="coachSelect clearfix">
          <span>教练选择</span>
          <Button type="primary">教练A</Button>
          <Button>教练B</Button>
          <Button>教练C</Button>
        </div>

        <div className="areaSelect clearfix">
          <span>地域选择</span>
          <Select
          className="area"
          defaultValue={provinceData[0]}
          style={{ width: 120 }}
          onChange={this.handleProvinceChange.bind(this)}
          >
          {provinceData.map(province => <Option key={province}>{province}</Option>)}
          </Select>

          <Select
          className="area"
          style={{ width: 120}}
          value={this.state.secondCity}
          onChange={this.onSecondCityChange.bind(this)}
          >
          {cities.map(city => <Option key={city}>{city}</Option>)}
          </Select>
        </div>

        <div className="schoolTypeSelect clearfix">
          <span>学校选择</span>
          <Button type="primary">幼儿园</Button>
          <Button>小学</Button>
        </div>

        <div className="schoolSelect clearfix">
          <span>学校选择</span>
          <Button type="primary">上海xxx幼儿园</Button>
          <Button>上海xxx幼儿园</Button>
          <Button>上海xxx幼儿园</Button>
          <Button>上海xxx幼儿园</Button>
          <Button>上海xxx幼儿园</Button>
        </div>

        <div className="classSelect clearfix">
          <span>班级选择</span>
          <Button type="primary">中班足球1班</Button>
          <Button>中班足球1班</Button>
          <Button>中班足球1班</Button>
          <Button>中班足球1班</Button>
          <Button>中班足球1班</Button>
          <Button>中班足球1班</Button>
          <Button>中班足球1班</Button>
        </div>

        <div className="periodSelect clearfix">
          <span>课程选择</span>
          <Button type="primary">1阶段普及第一课</Button>
          <Button>1阶段普及第一课</Button>
          <Button>1阶段普及第一课</Button>
          <Button>1阶段普及第一课</Button>
          <Button>1阶段普及第一课</Button>
          <Button>1阶段普及第一课</Button>
          <Button>1阶段普及第一课</Button>
          <Button>1阶段普及第一课</Button>
        </div>

        <div className="radioParent clearfix">
          <Radio.Group defaultValue="a" buttonStyle="solid" className="radio">
            <Radio.Button value="a">缩略</Radio.Button>
            <Radio.Button value="b">列表</Radio.Button>
          </Radio.Group>
        </div>

        <Collapse defaultActiveKey={['2']} onChange={callback}>
          <Panel header="2019/3/1" key="1">
            <List
              grid={{ gutter:5, column: 5}}
              dataSource={listData}
              renderItem={item => (
                <List.Item>
                  <Card
                  hoverable
                  cover={<img alt="example" src={item.avatar} />}>
                  <Meta
                    description="xxx幼儿园中班足球1班"
                  />
                  </Card>
                </List.Item>
              )}
            />  
          </Panel>

          <Panel header="2019/3/2" key="2">
            <List
              grid={{ gutter:5, column: 5}}
              dataSource={listData}
              renderItem={item => (
                <List.Item>
                  <Card
                  hoverable
                  cover={<img alt="example" src={item.avatar} />}>
                  <Meta
                    description="xxx幼儿园中班足球1班"
                  />
                  </Card>
                </List.Item>
              )}
            />  
          </Panel>
        </Collapse>

      </div>
    );
  }
}

export default App;
