<!-- app/components/reports/BaseDataTable.vue -->
<template>
  <ul>
    <li class="ballName">{{ title }}</li>
    <li class="thead">
      <div><span>{{ firstColLabel }}</span></div>
      <div><span>筆數</span></div>
      <div><span>下注金額</span></div>
      <div><span>有效投注</span></div>
      <div><span>未過帳金額</span></div>
      <div class="checkBox">
        <span>會員 <label><input type="checkbox" checked></label></span>
        <span>結果</span><span>退水</span><span>有效投注量</span>
      </div>
      <div class="checkBox">
        <span>代理 <label><input type="checkbox"></label></span>
        <span>結果</span><span>退水</span><span>有效投注量</span>
      </div>
      <div class="checkBox">
        <span>總代 <label><input type="checkbox"></label></span>
        <span>結果</span><span>退水</span><span>有效投注量</span>
      </div>
      <div class="checkBox">
        <span>股東 <label><input type="checkbox"></label></span>
        <span>結果</span><span>退水</span><span>有效投注量</span>
      </div>
      <div class="checkBox">
        <span>大股東 <label><input type="checkbox"></label></span>
        <span>結果</span><span>退水</span><span>有效投注量</span>
      </div>
      <div class="checkBox">
        <span>總監 <label><input type="checkbox"></label></span>
        <span>結果</span><span>退水</span><span>有效投注量</span>
      </div>
      <div class="checkBox">
        <span>大總監 <label><input type="checkbox"></label></span>
        <span>結果</span><span>退水</span><span>有效投注量</span>
      </div>
      <div><span>備註 </span></div>
      <div class="checkBox ballList">
        <span>成數 <label><input type="checkbox"></label></span>
        <span v-for="ball in ballList" :key="ball">{{ ball }}</span>
      </div>
    </li>

    <li class="tbody" v-for="(row, idx) in rows" :key="idx">
      <div><span>{{ row.account }}</span></div>
      <div><span>{{ row.count }}</span></div>
      <div><span class="blue underLine" @click="onClickBetAmount(row)">{{ formatNum(row.betAmount) }}</span></div>
      <div><span>{{ formatNum(row.validBet) }}</span></div>
      <div><span>{{ row.unsettled || 0 }}</span></div>
      <div class="checkBox">
        <span :class="row.memberResult < 0 ? 'red' : 'green'">{{ formatNum(row.memberResult) }}</span>
        <span :class="row.memberResult < 0 ? 'red' : 'green'">{{ row.memberRebate ?? 0 }}</span>
        <span :class="row.memberResult < 0 ? 'red' : 'green'">{{ row.memberValidBet ?? 0 }}</span>
      </div>
      <div class="checkBox">
        <span :class="row.agentResult < 0 ? 'red' : 'green'">{{ formatNum(row.agentResult) }}</span>
        <span :class="row.agentResult < 0 ? 'red' : 'green'">0</span>
        <span :class="row.agentResult < 0 ? 'red' : 'green'">0</span>
      </div>
      <div class="checkBox">
        <span :class="row.masterAgentResult < 0 ? 'red' : 'green'">{{ formatNum(row.masterAgentResult) }}</span>
        <span :class="row.masterAgentResult < 0 ? 'red' : 'green'">0</span>
        <span :class="row.masterAgentResult < 0 ? 'red' : 'green'">0</span>
      </div>
      <div class="checkBox">
        <span :class="row.shareholderResult < 0 ? 'red' : 'green'">{{ formatNum(row.shareholderResult) }}</span>
        <span :class="row.shareholderResult < 0 ? 'red' : 'green'">0</span>
        <span :class="row.shareholderResult < 0 ? 'red' : 'green'">0</span>
      </div>
      <div class="checkBox">
        <span :class="row.majorShareholderResult < 0 ? 'red' : 'green'">{{ formatNum(row.majorShareholderResult) }}</span>
        <span :class="row.majorShareholderResult < 0 ? 'red' : 'green'">0</span>
        <span :class="row.majorShareholderResult < 0 ? 'red' : 'green'">0</span>
      </div>
      <div class="checkBox">
        <span :class="row.directorResult < 0 ? 'red' : 'green'">{{ formatNum(row.directorResult) }}</span>
        <span :class="row.directorResult < 0 ? 'red' : 'green'">0</span>
        <span :class="row.directorResult < 0 ? 'red' : 'green'">0</span>
      </div>
      <div class="checkBox">
        <span :class="row.grandDirectorResult < 0 ? 'red' : 'green'">{{ formatNum(row.grandDirectorResult) }}</span>
        <span :class="row.grandDirectorResult < 0 ? 'red' : 'green'">0</span>
        <span :class="row.grandDirectorResult < 0 ? 'red' : 'green'">0</span>
      </div>
      <div><span>{{ row.memo ?? ' ' }}</span></div>
      <div class="checkBox ballList">
        <span v-for="ball in ballList" :key="ball">{{ row.share }}</span>
      </div>
    </li>

    
    <li class="tbody" v-if="totalRow">
      <div><span>合計</span></div>
      <div><span>{{ totalRow.count }}</span></div>
      <div><span class="blue underLine">{{ formatNum(totalRow.betAmount) }}</span></div>
      <div><span>{{ formatNum(totalRow.validBet) }}</span></div>
      <div><span>0</span></div>
      <div class="checkBox">
        <span :class="totalRow.memberResult < 0 ? 'red' : 'green'">{{ formatNum(totalRow.memberResult) }}</span>
        <span :class="totalRow.memberResult < 0 ? 'red' : 'green'">0</span>
        <span :class="totalRow.memberResult < 0 ? 'red' : 'green'">0</span>
      </div>
      <div class="checkBox">
        <span :class="totalRow.agentResult < 0 ? 'red' : 'green'">{{ formatNum(totalRow.agentResult) }}</span>
        <span :class="totalRow.agentResult < 0 ? 'red' : 'green'">0</span>
        <span :class="totalRow.agentResult < 0 ? 'red' : 'green'">0</span>
      </div>
      <div class="checkBox">
        <span :class="totalRow.masterAgentResult < 0 ? 'red' : 'green'">{{ formatNum(totalRow.masterAgentResult) }}</span>
        <span :class="totalRow.masterAgentResult < 0 ? 'red' : 'green'">0</span>
        <span :class="totalRow.masterAgentResult < 0 ? 'red' : 'green'">0</span>
      </div>
      <div class="checkBox">
        <span :class="totalRow.shareholderResult < 0 ? 'red' : 'green'">{{ formatNum(totalRow.shareholderResult) }}</span>
        <span :class="totalRow.shareholderResult < 0 ? 'red' : 'green'">0</span>
        <span :class="totalRow.shareholderResult < 0 ? 'red' : 'green'">0</span>
      </div>
      <div class="checkBox">
        <span :class="totalRow.majorShareholderResult < 0 ? 'red' : 'green'">{{ formatNum(totalRow.majorShareholderResult) }}</span>
        <span :class="totalRow.majorShareholderResult < 0 ? 'red' : 'green'">0</span>
        <span :class="totalRow.majorShareholderResult < 0 ? 'red' : 'green'">0</span>
      </div>
      <div class="checkBox">
        <span :class="totalRow.directorResult < 0 ? 'red' : 'green'">{{ formatNum(totalRow.directorResult) }}</span>
        <span :class="totalRow.directorResult < 0 ? 'red' : 'green'">0</span>
        <span :class="totalRow.directorResult < 0 ? 'red' : 'green'">0</span>
      </div>
      <div class="checkBox">
        <span :class="totalRow.grandDirectorResult < 0 ? 'red' : 'green'">{{ formatNum(totalRow.grandDirectorResult) }}</span>
        <span :class="totalRow.grandDirectorResult < 0 ? 'red' : 'green'">0</span>
        <span :class="totalRow.grandDirectorResult < 0 ? 'red' : 'green'">0</span>
      </div>
      <div><span> </span></div>
      <div class="checkBox ballList">
        <span v-for="ball in ballList" :key="ball">95</span>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export interface ReportRowData {
  account: string
  count: number
  betAmount: number
  validBet: number
  unsettled?: number
  memberResult: number
  memberRebate?: number
  memberValidBet?: number
  agentResult: number
  masterAgentResult: number
  shareholderResult: number
  majorShareholderResult: number
  directorResult: number
  grandDirectorResult: number
  memo?: string
  share: number
}

const props = defineProps<{
  title: string
  rows: ReportRowData[]
  firstColLabel?: string
}>()

const emit = defineEmits(['clickBetAmount'])

const ballList = ['足球', '美國職籃', '其他籃球', '美國職棒', '日本職棒', '中華職棒', '其他棒球', '美式足球', '網球', '彩球', '賽馬賽狗', '指數', '電競', '世界盃', '高爾夫', '冰球', '拳擊', '拳擊格鬥', '羽球', '排球', '桌球', '板球', '撞球', '手球', '世界盃(舊其他足球)', '足球-歐洲盃', '娛樂']

function formatNum(val: number) {
  return val?.toLocaleString() ?? '0'
}

function onClickBetAmount(row: ReportRowData) {
  emit('clickBetAmount', row)
}

const totalRow = computed<ReportRowData | null>(() => {
  if (!props.rows.length) return null
  return {
    account: '合計',
    count: props.rows.reduce((s, r) => s + r.count, 0),
    betAmount: props.rows.reduce((s, r) => s + r.betAmount, 0),
    validBet: props.rows.reduce((s, r) => s + r.validBet, 0),
    memberResult: props.rows.reduce((s, r) => s + r.memberResult, 0),
    agentResult: props.rows.reduce((s, r) => s + r.agentResult, 0),
    masterAgentResult: props.rows.reduce((s, r) => s + r.masterAgentResult, 0),
    shareholderResult: props.rows.reduce((s, r) => s + r.shareholderResult, 0),
    majorShareholderResult: props.rows.reduce((s, r) => s + r.majorShareholderResult, 0),
    directorResult: props.rows.reduce((s, r) => s + r.directorResult, 0),
    grandDirectorResult: props.rows.reduce((s, r) => s + r.grandDirectorResult, 0),
    share: 95
  }
})
</script>
