function initContext(){void 0===ctx&&(ctx=document.getElementById("canvas").getContext("2d"))}function enableNoiseAnimation(t){t?requestId||drawNoiseAnimatedFrame():requestId&&(clear(),window.cancelAnimationFrame(requestId),requestId=void 0)}function clear(){var t=ctx.canvas.width,n=ctx.canvas.height,e=ctx.createImageData(t,n);ctx.putImageData(e,0,0)}function drawNoiseAnimatedFrame(){return initContext(),frame+=1,frame%3?void(requestId=requestAnimationFrame(drawNoiseAnimatedFrame)):(noise(ctx),void(requestId=requestAnimationFrame(drawNoiseAnimatedFrame)))}function noise(t){for(var n=t.canvas.width,e=t.canvas.height,i=t.createImageData(n,e),o=new Uint32Array(i.data.buffer),a=o.length,r=0,m=0,l=6*Math.random()+4,c=256*Math.random()*256,s=0,u=0;u<a;)r<0&&(r=l*Math.random(),s=Math.pow(Math.random(),.25),u>c&&u<c+12288&&(s=Math.random()),m=255*s<<24),r-=1,o[u++]=m;t.putImageData(i,0,0)}function clearTimer(t){t&&(clearTimeout(t),t=null)}function getElement(t){return document.getElementById(t)}function addClassToElement(t,n,e){var i=getElement(n);null!==i&&(e?i.classList.add(t):i.classList.remove(t))}function onLoad(){startAnimations(animationDelay)}function startAnimations(t){tickerAnimationTimer=setTimeout(function(){enableTickerAnimation(!0)},t),wobbleAnimationTimer=setTimeout(function(){enableWobbleAnimation(!0)},t),flickerAnimationTimer=setTimeout(function(){startFlickerAnimation()},t)}function enableTickerAnimation(t){addClassToElement("tickerMove","tickerText",t),showNewsTicker(t)}function showNewsTicker(t){var n=getElement("tickerText");null!==n&&(t?n.style.color="white":n.style.color="black")}function enableWobbleAnimation(t){addClassToElement("wobble","content",t)}function startFlickerAnimation(){enableNoiseAnimation(!0),flickerAnimationTimer=setTimeout(function(){restartFlickerAnimation()},Math.random()*flickerInterval)}function restartFlickerAnimation(){stopFlickerAnimation(),flickerAnimationTimer=setTimeout(function(){startFlickerAnimation()},Math.random()*flickerInterval)}function stopFlickerAnimation(){clearTimer(flickerAnimationTimer),enableNoiseAnimation(!1)}function stopTickerAnimation(){clearTimer(tickerAnimationTimer),enableTickerAnimation(!1)}function stopWobbleAnimation(){clearTimer(wobbleAnimationTimer),enableWobbleAnimation(!1)}function stopAnimations(){stopFlickerAnimation(),stopWobbleAnimation(),stopTickerAnimation()}function onTurnaroundContainerClicked(){toggleAudioStreamPlayback()}function toggleAudioStreamPlayback(){var t=getElement("mp3");null!==t&&(t.paused?(t.play(),t.addEventListener("ended",function(){toggleAudioUiState(!0),t.pause()})):t.pause(),toggleAudioUiState(t.paused))}function toggleAudioUiState(t){toggleAudioPlayButtons(t),t?startAnimations(animationDelay):stopAnimations(),stopLogoZoomLoop(t),stopLogoRotation(t)}function toggleAudioPlayButtons(t){var n=getElement("audioButton");null!==n&&(t?n.style.backgroundImage="url(img/play.svg)":n.style.backgroundImage="url(img/pause.svg)")}function stopLogoZoomLoop(t){addClassToElement("zoomLoop","logo",!t)}function stopLogoRotation(t){addClassToElement("rotateY360","turnaroundLogo",!t)}!function(){var t=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame;window.requestAnimationFrame=t}();var ctx,requestId,frame=0,animationDelay=3200,flickerInterval=500,tickerAnimationTimer=null,wobbleAnimationTimer=null,flickerAnimationTimer=null;