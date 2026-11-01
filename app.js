const D = window.F1_DATA;
const set = (id,v)=>document.getElementById(id).textContent=v;
set('kpiRounds',D.kpis.grandPrixRounds); set('kpiTeams',D.kpis.teams); set('kpiSeasons',D.kpis.seasons); set('kpiDrivers',D.kpis.drivers);
set('coverageCircuits',D.kpis.circuits); set('coverageRaces',D.kpis.grandPrixRounds); set('coverageSeasons',D.kpis.seasons);

Chart.defaults.color='#aeb3bc';
Chart.defaults.font.family='Inter, Arial';
const grid='#252931', red='#ff2e2e', orange='#ff7a18', gray='#59606a';
const opts=(indexAxis='x')=>({responsive:true,maintainAspectRatio:false,indexAxis,plugins:{legend:{display:false}},scales:{x:{grid:{color:grid},ticks:{color:'#aeb3bc'}},y:{grid:{color:grid},ticks:{color:'#aeb3bc'},beginAtZero:true}}});
const chart=(id,type,labels,values,extra={})=>new Chart(document.getElementById(id),{type,data:{labels,datasets:[{data:values,backgroundColor:extra.colors||red,borderColor:extra.border||orange,borderWidth:extra.borderWidth||1,borderRadius:extra.radius||0,tension:.35,fill:extra.fill||false}]},options:extra.options||opts(extra.indexAxis)});

chart('championshipChart','line',D.seasonTeams.labels,D.seasonTeams.values,{border:red,backgroundColor:'rgba(255,46,46,.12)',borderWidth:3,fill:true});
chart('tyreChart','doughnut',D.tyres.labels,D.tyres.values,{colors:[red,orange,'#5f6670','#30343a'],options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'bottom',labels:{color:'#aeb3bc'}}}});
chart('driverChart','bar',D.topDrivers.labels,D.topDrivers.values,{indexAxis:'y',colors:red,radius:4});
chart('teamChart','bar',D.topTeams.labels,D.topTeams.values,{indexAxis:'y',colors:orange,radius:4});
chart('reliabilityChart','bar',D.reliability.labels,D.reliability.values,{indexAxis:'y',colors:'#ff7a18',radius:4,options:{...opts('y'),scales:{x:{grid:{color:grid},ticks:{color:'#aeb3bc'},min:0,max:100},y:{grid:{display:false},ticks:{color:'#aeb3bc'}}}}});
chart('geoChart','bar',D.geography.labels,D.geography.values,{colors:'#ff2e2e',radius:5});
chart('weatherChart','pie',D.weather.labels,D.weather.values,{colors:[orange,red,'#555b64','#30343a','#8a9099'],options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'bottom',labels:{color:'#aeb3bc'}}}});
chart('driverTrendChart','line',D.seasonDrivers.labels,D.seasonDrivers.values,{border:orange,backgroundColor:'rgba(255,122,24,.10)',borderWidth:3,fill:true});
