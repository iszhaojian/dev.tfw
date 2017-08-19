function uhInfo(id){
    window.location.href='http://'+window.location.host+'/admin/usedHouseInfo/index?id='+id;
}


function update_info(id){
    window.location.href='http://'+window.location.host+'/admin/usedHouseCatalog/add?id='+id;
}


// 删除
function del_info(id){
    swal({
            title: "确认删除吗？",
            text: "删除后将不可恢复 :(",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            closeOnConfirm: false,
            closeOnCancel: false
        },
        function(isConfirm){
            if (isConfirm) {
                // Ajax
                $.ajax({
                    type: "GET",
                    url: "/admin/usedHouseCatalog/del/id/"+id,
                    dataType: "JSON",
                    success: function(res){
                        // res
                        if (res === true) {
                            swal("提交成功", "当前操作已发生改变 :)", "success");
                            setTimeout("window.location.reload();",2000);
                        } else {
                            swal("提交失败", "请刷新页面后重试 :(", "error");
                        }
                    },
                    error: function(e){
                        console.log(e);
                        swal("未知错误", "请刷新页面后重试 :(", "error");
                    }
                });
            } else {
                swal("取消了", "当前操作未发生改变 :)", "error");
            }
        });
}