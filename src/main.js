/* foolish builder */
$(function(){

    let handlerHtml = `
        <div class="FB-handler">
            <a class="J-FB-move-up" href="javascript:void(0);"><i class="fa fa-arrow-up"></i> 上移</a>
            <a class="J-FB-move-down" href="javascript:void(0);"><i class="fa fa-arrow-down"></i> 下移</a>
            <a class="J-FB-usable" href="javascript:void(0);"><i class="fa fa-toggle-on"></i> 启用</a>
            <a class="J-FB-edit-item" href="javascript:void(0);"><i class="fa fa-pencil-square-o"></i> 编辑</a>
        </div>
    `;
    $("div[foolishContainer]").addClass('FB-item').append(handlerHtml);

    $(".J-FB-edit-item").on('click', function(){
        // alert('editor go');
        layer.msg('编辑', {shade: 0.3, icon: 2, time: 2500});
    });

    $(".J-FB-usable").on('click', function(){
        alert('editor usable');
    });

    $(".J-FB-move-down").on('click', function(){
        alert('editor move down');
    });

    $(".J-FB-move-up").on('click', function(){
        alert('editor move up');
    });

});