React pagination easy customize component. 

#  react-pagination-custom

[![npm version](https://img.shields.io/npm/v/react-responsive-ui.svg?style=flat-square)][npm-url]

TinyPagination is a best customizable tiny component you can find. It only handle logic, and you feel free for edit styles of number buttons, wrap container, spread,.... 

[npm-url]: https://www.npmjs.com/package/tiny-custom-pagination

![Notes](https://user-images.githubusercontent.com/5037791/29863835-062d7c98-8d9b-11e7-8aa1-8da8dd13a90c.png)


## Installation

```
npm install react-pagination-custom --save
```

## Properties


| Name          |Required? | Type         | Description           | 
| ------------- |:--------:|:------------:|:----------------------
| total         | Yes      | Number       |Total of item list
| selectedPageId| Yes      | Number       |Selected page number
| itemPerPage   | Yes      | Number       |Maximum item per one page
| renderBtnNumber| Yes     | Function     |Function return your customize button number component
| maxBtnNumbers| Yes       | Number       |Maximum buttons number will be show. If total of buttons is more than, buttons will bi collapse
| preKey      | Yes        | String     | Key of previous button
| nextKey     | Yes        | String     | Key of next button
| maxBtnPerSide | Yes      | Number       |Total of button in each side of selected button (default is 2)
| wrapStyle    | No     | Object     | Style of root container
| wrapClass    | No     | String     | Class of root container
| counterClass | No     | String     | Class of counter container
| counterStyle | No     | String     | Style of counter container
| btnsClass    | No     | Object     | Class of buttons container
| btnsStyle    | No     | String     | Style of buttons container
| spreadClass  | No     | String     | Class of spread container
| spreadStyle  | No     | Object     | Style of spread container


## Usage

### App.js
```js
import {TinyPagination} from 'react-pagination-custom'
....
....
<TinyPagination
    total = {...}
    selectedPageId = {...}
    itemPerPage = {...}
    renderBtnNumber = {...}
    maxBtnNumbers = {...}
    preKey = '...'
    nextKey = '...'
    {...someOptionalProperties}
/>
```
Demo:

![Demo](https://user-images.githubusercontent.com/5037791/29862587-20387b14-8d97-11e7-943f-e4e543e91694.gif)


## Example
```js
import React from 'react'
import TinyPagination from 'tiny-custom-pagination'
import './App.css'
class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {...props};
    this.changePage = this.changePage.bind(this);
    this.renderBtnNumber = this.renderBtnNumber.bind(this);
  }

  changePage(id){
    this.setState((prevState, props) => { 
      return { 
        ...prevState,
        selectedPageId: id 
       }
    });    
  }

  buttonPageClick(id){
    let {selectedPageId} = this.state;
    switch (id) {
      case 'PRE':
        this.changePage(selectedPageId - 1);
        break;
      case 'NEXT':
        this.changePage(selectedPageId + 1);
        break;
      default:
        this.changePage(id);
        break;
    }
  }

  renderBtnNumber(id){
    let {selectedPageId} = this.state;
    return(
      <button
        onClick = {this.buttonPageClick.bind(this, id)}
        key = {id}
        className = {`page ${selectedPageId === id? 'selected-page' : ''}`}
      >
        {id}
      </button>
    );
  }

  render() {
    let {selectedPageId, list} = this.state;
    const itemPerPage = 5;
    const maxBtnNumbers = 6;
    let listShow = [...list];
    listShow = listShow.splice((selectedPageId - 1) * itemPerPage, itemPerPage);
    return (
      <div>
        <ul>
          {listShow.map(i => <li key={i.name}> {i.name}</li>)}
        </ul>
        <TinyPagination
          total = {list.length}
          selectedPageId = {selectedPageId}
          itemPerPage = {itemPerPage}
          renderBtnNumber = {this.renderBtnNumber}
          maxBtnNumbers = {maxBtnNumbers}
          preKey = 'PRE'
          nextKey = 'NEXT'
          wrapStyle = {{backgroundColor: '#ffffff'}}
          wrapClass = 'page-container'
          btnsClass = 'btns-container'
          counterClass = 'counter-container'
          counterStyle = {{color: 'gray'}}
          spreadClass = 'spread-container'
          spreadStyle = {{padding: '0 5px'}}
        />
      </div>
    )
  }
}

App.defaultProps = {
  selectedPageId: 1,
  list: [
    {name: 'item 1'},{name: 'item 2'},{name: 'item 3'},{name: 'item 4'},{name: 'item 5'},{name: 'item 6'},{name: 'item 7'},{name: 'item 8'},{name: 'item 9'},{name: 'item 10'},{name: 'item 11'},{name: 'item 12'},{name: 'item 13'},{name: 'item 14'},{name: 'item 15'},{name: 'item 16'},{name: 'item 17'},{name: 'item 18'},{name: 'item 19'},{name: 'item 20'},{name: 'item 21'},{name: 'item 22'},{name: 'item 23'},{name: 'item 24'},{name: 'item 25'},{name: 'item 26'},{name: 'item 27'},{name: 'item 28'},{name: 'item 29'},{name: 'item 30'},{name: 'item 31'},{name: 'item 32'},{name: 'item 33'},{name: 'item 34'},{name: 'item 35'},{name: 'item 36'},{name: 'item 37'},{name: 'item 38'},{name: 'item 39'},{name: 'item 40'},{name: 'item 41'},{name: 'item 42'},{name: 'item 43'},{name: 'item 44'},{name: 'item 45'},{name: 'item 46'},{name: 'item 47'},{name: 'item 48'}
  ],
}

export default App
```

### App.css
```css
.page{
  padding: 5px;
  margin: 5px;
}

.page.selected-page{
  background-color: gray;
  color: white;
}
```

## Contributing

Feel free for discussion and implementing enhancement. Contact me in github

## License

[MIT](https://github.com/thomaspark/bootswatch/blob/gh-pages/LICENSE)