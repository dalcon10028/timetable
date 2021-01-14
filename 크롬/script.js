$(function() {
    const tab = $('.nav-item');
    const table = $('table');
    
    table.hide();
    table.eq(0).show();
  
  tab.click(function(e) {
      e.preventDefault();
  
      $(this).find('a').addClass('active');
      $(this).closest('li').siblings().find('a').removeClass('active');
      table.hide();
      
      let $idx = $(this).index();
      table.eq($idx).show();
    })
  })
  
  // 과목 색
  
  $(function() {
      const cls = $('.class');
      cls.eq(0).css('background-color','#dee8f6');
      cls.eq(1).css('background-color','#ffedda');
      cls.eq(2).css('background-color','#dee8f6');
      cls.eq(3).css('background-color','#fff8cc');
      cls.eq(4).css('background-color','#eff9cc');
      cls.eq(5).css('background-color','#f2e8e8');
      cls.eq(6).css('background-color','#f2e8e8');
      cls.eq(7).css('background-color','#fff8cc');
      cls.eq(8).css('background-color','#eff9cc');
  
      cls.eq(9).css('background-color','#dee8f6');
      cls.eq(10).css('background-color','#ffedda');
      cls.eq(11).css('background-color','#fff8cc');
      cls.eq(12).css('background-color','#fff8cc');
      cls.eq(13).css('background-color','#eff9cc');
      cls.eq(14).css('background-color','#f2e8e8');
      cls.eq(15).css('background-color','#eff9cc');
  })
  
  // 디데이
  $(function() {
      const day = $('span');
      let now = new Date()
          startDay = new Date("2019-09-07")
          passedDay = Math.round((now.getTime()-startDay.getTime())/(24*60*60*1000))+1;
      
      day.text('♥+'+passedDay+'일');
  })