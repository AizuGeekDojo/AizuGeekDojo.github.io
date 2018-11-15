<template>
  <div class="calender">
    <h4>Aizu Geek Dojo 開室時間</h4>
    <h6>下記時間には、Geek Dojoの機器の扱いに長けたSAが常駐しており、SAが機器の使用方法を説明します。</h6>
    <div class="gc_wrapper">
      <div class="responsive-iframe-container big-container"> 
        <h3>GeekDojo SA日程表</h3>
        <iframe src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showPrint=0&amp;showCalendars=0&amp;showTz=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=646mrbqs7kg1g7869hatdlan6o%40group.calendar.google.com&amp;color=%23B1365F&amp;ctz=Asia%2FTokyo" style="border:solid 1px #777"  frameborder="0" scrolling="no"></iframe>   
      </div>
      <div class="responsive-iframe-container small-container"> 
        <iframe src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showPrint=0&amp;showCalendars=0&amp;showTz=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=646mrbqs7kg1g7869hatdlan6o%40group.calendar.google.com&amp;color=%23B1365F&amp;ctz=Asia%2FTokyo" style="border:solid 1px #777"  frameborder="0" scrolling="no"></iframe>   
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "calender",
  props: {
    msg: String
  }
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.calender {
  border: ;
}

iframe {
  width: 800px;
  height: 600px;
}

.gc_wrapper {
  max-width: 800px;
  min-width: 300px;
  margin: 2.0833% auto;
}

.responsive-iframe-container {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
}
.responsive-iframe-container iframe,
.responsive-iframe-container object,
.responsive-iframe-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

@media (max-width: 600px) {
  .big-container {
    display: none;
  }
  .small-container {
    padding-bottom: 200%; /* 高さ */
  }
}
@media (min-width: 600px) {
  .small-container {
    display: none;
  }
}
</style>
