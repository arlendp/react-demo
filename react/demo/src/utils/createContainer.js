import {connect} from 'react-redux'

/**
 * 对react-redux中connect方法生成容器组件的封装
 * @param  {Function} mapStateToProps   
 * @param  {Object} mapActionCreators
 * @param  {Component} component
 * @return {[type]}
 */
export default function createContainer(mapStateToProps, mapActionCreators, component) {
  const connectComponent = connect(mapStateToProps, mapActionCreators)
  return component ? connectComponent(component) : connectComponent
}
