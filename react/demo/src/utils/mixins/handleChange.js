
// input框处理内容改变事件
export default function handleChange(evt) {
  this.setState({
    [evt.target.name]: evt.target.value.trim()
  })
}
