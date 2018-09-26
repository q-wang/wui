<template>
  <div class="coldWallet">
    <p class="content-title">热钱包-交易打包</p>
    <div class="content">
      <Row>
        <i-col span="11">
          <b-card v-if="show">
            <div slot="header">
              交易信息
              <div class="card-header-actions">
                <b-link href="#" class="card-header-action btn-setting">
                  <i class="icon-settings"></i>
                </b-link>
                <b-link class="card-header-action btn-minimize" v-b-toggle.collapse1>
                  <i class="icon-arrow-up"></i>
                </b-link>
                <b-link href="#" class="card-header-action btn-close" v-on:click="show = !show">
                  <i class="icon-close"></i>
                </b-link>
              </div>
            </div>
            <b-collapse id="collapse1" visible>
              <b-card-body>
                <p slot="title">交易信息</p>
                <div class="step clearfix">
                  <p class="title"  v-if="first">确认交易账户</p>
                    <div v-if="first">
                      <p><span>交易账户:</span><label>{{details.dealAccount}}</label></p>
                      <p><span>钱包地址:</span><label>{{details.walletAddress}}</label></p>
                      <p><span>联系方式:</span><label>{{details.telTy}}</label></p>
                      <p><span>钱包地址:</span><label>{{details.walletAddress}}</label></p>
                    </div>
                </div>
              </b-card-body>
            </b-collapse>
          </b-card>
          <Button size="large" type="primary" @click="next" v-if="third">预览</Button>
          <Button size="large" type="primary" @click="next" v-else>下一步</Button>
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
        <Table border :columns="columns" :data="transactions.data" :height="400"></Table>
        <b-pagination size="lg" :total-rows="transactions.count" v-model="transactions.pageNo" :per-page="transactions.pageSize"/>
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
      state: {
        status: 0
      },
      columns: [
        {
          title: '序号',
          type: 'index',
          maxWidth: 100
        },
        {
          title: '渠道',
          key: 'channel',
          maxWidth: 100
        },
        {
          title: '主链',
          key: 'chain',
          maxWidth: 100
        },
        {
          title: '币种',
          key: 'coin',
          maxWidth: 100
        },
        {
          title: '金额',
          key: 'amount',
          maxWidth: 200
        },
        {
          title: 'Address',
          key: 'address'
        },
        {
          title: '时间',
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
      transactions: {
        data: [
          {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            date: '2016-10-03',
            signTy: ''
          }
        ],
        count: 101,
        pageNo: 3,
        pageSize: 10
      },
      details: {
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
      switch (this.state.status) {
        case 1:
          break
        case 2:
          break
      }
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
  @import 'Hot.less';
</style>
