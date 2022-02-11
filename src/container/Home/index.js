import React, { useEffect } from 'react'
import { connect } from 'react-redux'

const Home = (props) => {
  useEffect(() => {
    console.log('home组件加载完毕')
  })
  return (
    <div>
      <span>home</span>
      <button onClick={() => {
        console.log('home button')
      }}>click</button>
    </div>
  )
}

Home.queryData = async (store) => {
  const res = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve( [
        {
          id: 1,
          name: '测试',
          base: 'city1'
        },
        {
          id: 2,
          name: '计算机',
          base: 'city2'
        }
      ])
    }, 1000)
  })
  store.dispatch({
    type: 'SAVE_DATA',
    data: res
  })
}

const mapStateToProps = (state, props) => {
  return {
    ...state.home
  }
}

const mapDispatchToProps = dispatch => ({
  getHomeList(data) {
    dispatch({
      type: 'SAVE_DATA',
      data
    })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home)