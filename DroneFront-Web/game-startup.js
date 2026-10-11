(function(){
 const by=id=>document.getElementById(id);
 const mobile=/Android|iPhone|iPad/i.test(navigator.userAgent);
 if(window.DroneAndroid&&typeof window.DroneAndroid.editText==='function'){
  for(const id of ['pilot-name','room-code']){const input=by(id);if(input){input.readOnly=true;input.setAttribute('aria-description','اضغط لفتح لوحة مفاتيح الهاتف');input.onclick=()=>{input.blur();window.DroneAndroid.editText(id,input.value);};}}
 }
 window.droneRenderScale=()=>{const quality=localStorage.getItem('drone-quality')||(mobile?'medium':'high');const cap=quality==='low'?1280:quality==='medium'?1920:2560;return Math.min(quality==='low'?1:quality==='medium'?1.5:2,cap/window.innerWidth);};
 const notice=document.createElement('div');notice.id='load-notice';notice.setAttribute('role','status');notice.style.cssText='position:fixed;top:8px;left:8px;right:8px;z-index:65;padding:10px;background:#082433f5;color:#eafffa;border:1px solid #57c5b4;border-radius:9px;text-align:center;direction:rtl;font:13px Arial';
 const text=document.createElement('span');text.textContent='جارٍ تحميل اللعبة • أزرار اللعب ستعمل بعد تجهيز العالم';notice.append(text);document.body.append(notice);
 window.droneLoadProgress=p=>{if(window.droneWorldReady)return;const label=p<.9?'تحميل ملفات اللعبة '+Math.round(p*100)+'%':'الملفات جاهزة • جارٍ تجهيز الطبيعة والمدن';text.textContent=label;by('entry-status').textContent=label;};
 let tools=false;
 function recovery(message){text.textContent=message;if(tools)return;tools=true;const retry=document.createElement('button');retry.textContent='إعادة المحاولة بجودة خفيفة';retry.style.margin='5px';retry.onclick=()=>{localStorage.setItem('drone-quality','low');location.reload();};notice.append(retry);const details=document.createElement('details');const summary=document.createElement('summary');summary.textContent='تفاصيل المشكلة';details.append(summary);const error=document.createElement('div');error.id='load-error-details';details.append(error);notice.append(details);}
 window.droneLoadError=error=>{recovery('تعذّر تحميل اللعبة على هذا الجهاز. جرّب الجودة الخفيفة.');by('load-error-details').textContent=String(error).slice(0,500);by('entry-status').textContent='تعذّر تحميل العالم؛ تفاصيل المشكلة في أعلى الشاشة';};
 window.addEventListener('error',event=>{if(!window.droneWorldReady&&event.message)window.droneLoadError(event.message);});
 const timer=setTimeout(()=>{if(!window.droneWorldReady)recovery('تجهيز العالم يستغرق وقتًا طويلًا. يمكنك إعادة المحاولة بجودة خفيفة.');},90000);
 function ready(){clearTimeout(timer);notice.remove();}
 if(window.droneWorldReady)ready();else window.addEventListener('drone-world-ready',ready,{once:true});
})();
