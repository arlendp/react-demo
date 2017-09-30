import xhr from './xhr/'

class MsgService {

  fetch({author = '', pageIdx = 1, quantity = 10, msgId} = {}) {
    let url = '/msg/'

    if (msgId) url += msgId
    else url = `${url}?author=${author}&pageIdx=${pageIdx}&quantity=${quantity}&msgId=${msgId}`

    return xhr({url})
  }

  add(msgBody) {
    return xhr({
      method: 'post',
      url: '/msg',
      body: msgBody
    })
  }

  mod(msgBody) {
    let msgId = msgBody.id
    delete msgBody.msgId

    return xhr({
      method: 'put',
      url: `/msg/${msgId}`,
      body: msgBody
    })
  }

  del(msgId) {
    return xhr({
      method: 'delete',
      url: `/msg/${msgId}`
    })
  }
}

export default new MsgService()
