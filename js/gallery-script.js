$(window).on('load',function(){	//画面遷移時にギャラリーの画像が被らないように、すべての読み込みが終わった後に実行する

    //＝＝＝Muuriギャラリープラグイン設定
    var grid = new Muuri('.grid', {
    
    //アイテムの表示速度※オプション。入れなくても動作します
    showDuration: 600,
    showEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    hideDuration: 600,
    hideEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        
    // アイテムの表示/非表示状態のスタイル※オプション。入れなくても動作します
      visibleStyles: {
        opacity: '1',
        transform: 'scale(1)'
      },
      hiddenStyles: {
        opacity: '0',
        transform: 'scale(0.5)'
      }    
    });
    
    //＝＝＝並び替えボタン設定
    $('.sort-btn li').on('click',function(){			//並び替えボタンをクリックしたら
        $(".sort-btn .active").removeClass("active");	//並び替えボタンに付与されているactiveクラスを全て取り除き
        var className = $(this).attr("class");			//クラス名を取得
        className = className.split(' ');				//「sortXX active」のクラス名を分割して配列にする
        $("."+className[0]).addClass("active");			//並び替えボタンに付与されているクラス名とギャラリー内のリストのクラス名が同じボタンにactiveクラスを付与
        if(className[0] == "sort00"){						//クラス名がsort00（全て）のボタンの場合は、
             grid.show('');								//全ての要素を出す
        }else{											//それ以外の場合は
            grid.filter("."+className[0]); 				//フィルターを実行
        }
    });
    
    //＝＝＝ Fancyboxの設定
    $('[data-fancybox]').fancybox({
     thumbs: {
        autoStart: true, //グループのサムネイル一覧をデフォルトで出す。不必要であればfalseに
      },	
    });
        
    });
// === 加载动画：小电池充电 + Loading 层淡出 ===
window.addEventListener("load", () => {
  const loader  = document.getElementById("loading-screen");
  const bar     = loader?.querySelector(".battery-level");
  const frame   = loader?.querySelector(".battery-frame");

  if(!loader || !bar || !frame) return;

  let progress = 0;
  const tick = setInterval(() => {
    progress += Math.random() * 20;
    if (progress > 100) progress = 100;
    bar.style.width = progress + "%";
    frame.setAttribute("aria-valuenow", Math.round(progress));

    if (progress >= 100) {
      clearInterval(tick);
      setTimeout(() => {
        loader.classList.add("fade-out");
        
        // MODIFICATION: Call the entrance animations function here
        startTopAnimations(); 
        
        setTimeout(() => loader.remove(), 800);
      }, 400);
    }
  }, 160);
});
// === 音乐控制 ===
const bgm = document.getElementById('bgm');
const record = document.querySelector('.record');

if (bgm && record) {
  let isPlaying = false;

  record.addEventListener('click', () => {
    if (!isPlaying) {
      bgm.play();
      record.style.animationPlayState = 'running';
    } else {
      bgm.pause();
      record.style.animationPlayState = 'paused';
    }
    isPlaying = !isPlaying;
  });

  // 当音乐被用户手动暂停或播放时（非点击图片）
  bgm.addEventListener('play', () => {
    record.style.animationPlayState = 'running';
    isPlaying = true;
  });
  bgm.addEventListener('pause', () => {
    record.style.animationPlayState = 'paused';
    isPlaying = false;
  });
}