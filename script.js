function _0x4b3a(){var _0x31bbd0=['setItem','21445cdTObO','moveTo','getFile','756184NldDzy','write','file-input','load','close','querySelectorAll','log','showSaveFilePicker','close-btn','editor','target','2KReKAr','save-btn','Close\x20clicked','forEach','new_file.py','python','files','435200DBoyFf','data-theme','addEventListener','then','376293UcwJeI','theme','Maximize\x20clicked','Python\x20Files','getValue','minimize-btn','setValue','.min.css','change','83792ZXHrQM','clear-btn','editorContent','3428532wfKOnx','pastel-on-dark','fromTextArea','getElementById','resizeTo','createWritable','showOpenFilePicker','maximize-btn','getAttribute','click','href','Minimize\x20clicked','name','2117773UTBMtp','getItem','open-btn','theme-stylesheet','378lCRWHq','.theme-tab'];_0x4b3a=function(){return _0x31bbd0;};return _0x4b3a();}var _0xb8703a=_0x40be;(function(_0x2ce58d,_0x1e005b){var _0x20a31e=_0x40be,_0xdf3edc=_0x2ce58d();while(!![]){try{var _0x288bbe=-parseInt(_0x20a31e(0x10d))/0x1+-parseInt(_0x20a31e(0x132))/0x2*(-parseInt(_0x20a31e(0x104))/0x3)+parseInt(_0x20a31e(0x139))/0x4+parseInt(_0x20a31e(0x124))/0x5*(parseInt(_0x20a31e(0x121))/0x6)+parseInt(_0x20a31e(0x11d))/0x7+-parseInt(_0x20a31e(0x127))/0x8+-parseInt(_0x20a31e(0x110))/0x9;if(_0x288bbe===_0x1e005b)break;else _0xdf3edc['push'](_0xdf3edc['shift']());}catch(_0x4760d0){_0xdf3edc['push'](_0xdf3edc['shift']());}}}(_0x4b3a,0x3c7a2));var editor=CodeMirror[_0xb8703a(0x112)](document[_0xb8703a(0x113)](_0xb8703a(0x130)),{'mode':_0xb8703a(0x137),'lineNumbers':!![],'theme':_0xb8703a(0x111),'lineWrapping':!![],'scrollPastEnd':!![],'pollInterval':0x64});let fileHandle=null;function saveToLocal(){var _0x2afabb=_0xb8703a;localStorage[_0x2afabb(0x123)](_0x2afabb(0x10f),editor['getValue']());}function loadFromLocal(){var _0xdcfd6f=_0xb8703a,_0x573bda=localStorage[_0xdcfd6f(0x11e)](_0xdcfd6f(0x10f));_0x573bda&&editor[_0xdcfd6f(0x10a)](_0x573bda);}function _0x40be(_0x295cda,_0x1eb756){var _0x4b3a0a=_0x4b3a();return _0x40be=function(_0x40be4f,_0x43fe93){_0x40be4f=_0x40be4f-0x101;var _0x3143d3=_0x4b3a0a[_0x40be4f];return _0x3143d3;},_0x40be(_0x295cda,_0x1eb756);}async function saveFile(){var _0x2ba3fc=_0xb8703a;if(fileHandle){const _0x43183d=await fileHandle[_0x2ba3fc(0x115)]();await _0x43183d[_0x2ba3fc(0x128)](editor[_0x2ba3fc(0x108)]()),await _0x43183d[_0x2ba3fc(0x12b)]();}}document['getElementById'](_0xb8703a(0x10e))[_0xb8703a(0x102)](_0xb8703a(0x119),function(){var _0x1f48a4=_0xb8703a;editor[_0x1f48a4(0x10a)](''),saveToLocal(),fileHandle=null;}),document['getElementById'](_0xb8703a(0x133))[_0xb8703a(0x102)]('click',async function(){var _0x306232=_0xb8703a;fileHandle?await saveFile():(fileHandle=await window[_0x306232(0x12e)]({'suggestedName':_0x306232(0x136),'types':[{'description':_0x306232(0x107),'accept':{'text/plain':['.py']}}]}),await saveFile()),saveToLocal();}),document[_0xb8703a(0x113)](_0xb8703a(0x11f))[_0xb8703a(0x102)](_0xb8703a(0x119),function(){var _0x31a758=_0xb8703a;document[_0x31a758(0x113)](_0x31a758(0x129))['click']();}),document[_0xb8703a(0x113)](_0xb8703a(0x129))['addEventListener'](_0xb8703a(0x10c),async function(_0x5851d8){var _0x48f6f1=_0xb8703a,_0x436e99=_0x5851d8[_0x48f6f1(0x131)][_0x48f6f1(0x138)][0x0];if(_0x436e99){fileHandle=await window[_0x48f6f1(0x116)]({'suggestedName':_0x436e99[_0x48f6f1(0x11c)],'types':[{'description':_0x48f6f1(0x107),'accept':{'text/plain':['.py']}}]})[_0x48f6f1(0x103)](([_0xeea516])=>_0xeea516);const _0x39410c=await fileHandle[_0x48f6f1(0x126)](),_0x42923f=await _0x39410c['text']();editor[_0x48f6f1(0x10a)](_0x42923f),saveToLocal();}}),editor['on'](_0xb8703a(0x10c),async function(){saveToLocal(),fileHandle&&await saveFile();}),document[_0xb8703a(0x12c)](_0xb8703a(0x122))[_0xb8703a(0x135)](_0x37e321=>{var _0x2bb3f6=_0xb8703a;_0x37e321[_0x2bb3f6(0x102)](_0x2bb3f6(0x119),function(){var _0x188348=_0x2bb3f6,_0x45bfcd=this[_0x188348(0x118)](_0x188348(0x101)),_0x2eeaac=document[_0x188348(0x113)](_0x188348(0x120));_0x2eeaac[_0x188348(0x11a)]='https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.5/theme/'+_0x45bfcd+_0x188348(0x10b),editor['setOption'](_0x188348(0x105),_0x45bfcd);});}),window[_0xb8703a(0x102)](_0xb8703a(0x12a),function(){loadFromLocal();}),document[_0xb8703a(0x113)](_0xb8703a(0x109))[_0xb8703a(0x102)]('click',function(){var _0x1d75ba=_0xb8703a;console[_0x1d75ba(0x12d)](_0x1d75ba(0x11b));}),document[_0xb8703a(0x113)](_0xb8703a(0x117))['addEventListener'](_0xb8703a(0x119),function(){var _0xfc3c97=_0xb8703a;console[_0xfc3c97(0x12d)](_0xfc3c97(0x106));}),document[_0xb8703a(0x113)](_0xb8703a(0x12f))[_0xb8703a(0x102)]('click',function(){var _0x1456cd=_0xb8703a;console[_0x1456cd(0x12d)](_0x1456cd(0x134));}),window['onload']=function(){var _0x434f8a=_0xb8703a;window[_0x434f8a(0x125)](0x64,0x64),window[_0x434f8a(0x114)](0x2bc,0x12c),window['document']['title']='';};