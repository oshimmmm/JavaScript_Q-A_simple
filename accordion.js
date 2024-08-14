
(() => {
    // // クラスとインスタンスを使わないパターン


    // // js-accordionというidを付けたものを取得
    // const $elm = document.querySelector('#js-accordion');
    // // 取得したもののアンカーリンクタグを取得
    // const $trigger = $elm.getElementsByTagName('a');
    

    // const triggerLen = $trigger.length;
    // let index =0;
    // while (index < triggerLen) {
    //     $trigger[index].addEventListener('click', (e) => clickHandler(e));
    //     index++;
    // }

    // // 0個めのtriggerに対してクリックイベントを持たせる。実行されたら、clickHandlerが実行される
    // // $trigger[0].addEventListener('click', (e) => clickHandler(e));

    // const clickHandler = (e) => {
    //     e.preventDefault();
        
    //     // クリックされた要素そのものを取得する(accordion-triggerの1個めがクリックされたらaccordion-trigerの1個めを取得する。それを$targetと名付ける)
    //     const $target = e.currentTarget;

    //     // 0個めのtriggerの次の要素を取得して$contentと名付ける
    //     const $content = $target.nextElementSibling;

    //     if($content.style.display === 'block'){
    //         $content.style.display = 'none';
    //     } else {
    //         $content.style.display ='block'
    //     }
    // };



// クラスとインスタンスを使うパターン

    class Accordion {
        // 初期化
        // objとは、インスタンスで指定したもの（ここではhookNameとtagName）
        constructor(obj){

            // js-accordionというidを付けたものを取得
            const $elm = document.querySelector(obj.hookName);
            // 取得したもののアンカーリンクタグを取得
            const $trigger = $elm.getElementsByTagName(obj.tagName);
    

            const triggerLen = $trigger.length;
            let index =0;
            while (index < triggerLen) {
                $trigger[index].addEventListener('click', (e) => this.clickHandler(e));
                index++;
            }
        }
        clickHandler = (e) => {
            e.preventDefault();
            
            // クリックされた要素そのものを取得する(accordion-triggerの1個めがクリックされたらaccordion-trigerの1個めを取得する。それを$targetと名付ける)
            const $target = e.currentTarget;
    
            // 0個めのtriggerの次の要素を取得して$contentと名付ける
            const $content = $target.nextElementSibling;
    
            if($content.style.display === 'block'){
                $content.style.display = 'none';
            } else {
                $content.style.display ='block'
            }
        };
    }

    // インスタンス
    const fuckingAccordion = new Accordion({
        hookName: '#js-accordion',
        tagName: 'a'
    });

    const godAccordion = new Accordion({
        hookName: '#js-faq',
        tagName: 'p'
    });

    const miniAccordion = new Accordion({
        hookName: '#js-accordion-mini',
        tagName: 'dt'
    });

})();