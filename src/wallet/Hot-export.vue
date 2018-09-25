<template>
  <div class="coldWallet">
    <p class="content-title">冷钱包</p>
    <div class="content">
      <Row>
        <i-col span="11">
          <Card>
            <p slot="title">交易信息</p>
            <div class="step clearfix">
              <p class="title"  v-if="first">确认交易账户</p>
              <p class="title"  v-if="second">确认转出币信息</p>
              <p class="title"  v-if="third">确认交易明细</p>
              <div v-if="first">
                <p><span>交易账户</span><Input v-model="dataDealMessage.dealAccount" readonly/></p>
                <p><span>钱包地址</span><Input v-model="dataDealMessage.walletAddress" readonly/></p>
                <p><span>联系方式</span><Input v-model="dataDealMessage.telTy"  readonly/></p>
                <p><span>钱包地址</span><Input v-model="dataDealMessage.walletAddress" readonly/></p>
              </div>
              <div v-if="second">
                <p><span>转出账户</span><Input v-model="dataDealMessage.outAccount" readonly/></p>
                <p><span>转出币种</span><Input v-model="dataDealMessage.outCurrency" readonly/></p>
                <p><span>转出数量(个)</span><Input v-model="dataDealMessage.outNum"  readonly/></p>
                <p><span>钱包地址</span><Input v-model="dataDealMessage.walletAddress" readonly/></p>
              </div>
              <div v-if="third">
                <p><span>交易账户</span><Input v-model="dataDealMessage.dealAccount" readonly/></p>
                <p><span>钱包地址</span><Input v-model="dataDealMessage.walletAddress" readonly/></p>
                <p><span>交易时间</span><Input v-model="dataDealMessage.dealTime"  readonly/></p>
                <p><span>钱包地址</span><Input v-model="dataDealMessage.walletAddress" readonly/></p>
              </div>
              <Button size="large" type="primary" @click="next" v-if="third">预览</Button>
              <Button size="large" type="primary" @click="next" v-else>下一步</Button>
            </div>
          </Card>
        </i-col>
        <i-col span="11" offset="1">
          <Card>
            <p slot="title">二维码扫描区</p>
            <qriously :size="450" value="hello world"/>
          </Card>
        </i-col>
      </Row>
      <div class="titleTable">
        <span class="title-table">交易列表</span>
        <Table border :columns="columns" :data="data"></Table>
      </div>
    </div>
  </div>
</template>

<script>
import designImg from '../assets/img/design.png'
import designActive from '../assets/img/design-active.png'
export default {
  name: 'hot-export',
  data () {
    return {
      value: '1',
      first: true,
      second: false,
      third: false,
      paused: false,
      columns: [
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        },
        {
          title: 'Date',
          key: 'date'
        },
        {
          title: '标记',
          key: 'design',
          width: 150,
          align: 'center',
          render: (h, params) => {
            if (params.row.signTy === 'sign') {
              return h('img', {
                attrs: {
                  src: designActive,
                  width: 25,
                  height: 25
                },
                on: {
                  click: () => {
                    this.show(params)
                  }
                }
              })
            } else {
              return h('img', {
                attrs: {
                  src: designImg,
                  width: 25,
                  height: 25
                },
                on: {
                  click: () => {
                    this.show(params)
                  }
                }
              })
            }
          }
        }
      ],
      data: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03',
          signTy: ''
        },
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03',
          signTy: ''
        },
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03',
          signTy: ''
        },
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03',
          signTy: ''
        },
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03',
          signTy: ''
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01',
          signTy: ''
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02',
          signTy: 'sign'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04',
          signTy: 'sign'
        }
      ],
      dataDealMessage: {
        dealAccount: '利好@qq.com ',
        walletAddress: '/home/q-wang/btc_unsigned/',
        telTy: '17611206123',
        outAccount: '利好@qq.com',
        outCurrency: 'OTC',
        outNum: '17',
        dealTime: '2018-09-18 12：21'
      }
    }
  },
  created () {
    this.$nextTick(() => {
      this.getDealList()
    })
  },
  methods: {
    next () {
      if (this.first === true) {
        this.first = false
        this.second = true
      } else if (this.second === true) {
        this.second = false
        this.third = true
      }
    },
    onDecode (decodedString) {
      // ...
    },
    getDealList: async function () { // 获取交易列表
      // await dealList((response) => {
      //   if (response.header.code === '0') {
      //     this.data = response.body;
      //   }
      // })
    },
    show (params) { // 标记请求
      if (params.row.signTy === 'sign') {
        this.$Modal.info({
          title: '提示',
          content: '确定取消标记此条交易？',
          closable: true,
          loading: false,
          onOk: () => {
            console.log(params)// 请求将此条信息取消标记，返回成功后，再次请求列表接口，将列表信息刷新
            setTimeout(() => {
              this.$Modal.remove()
              this.$Message.info('取消成功')
            }, 2000)
          }
        })
      } else {
        this.$Modal.info({
          title: '提示',
          content: '确定标记此条交易？',
          closable: true,
          loading: false,
          onOk: () => {
            console.log(params)// 请求将此条信息标记，返回成功后，再次请求列表接口，将列表信息刷新
            setTimeout(() => {
              this.$Modal.remove()
              this.$Message.info('标记成功')
            }, 2000)
          }
        })
      }
    }
  }
}
</script>

<style lang="less">
  @import 'Hot';
</style>
