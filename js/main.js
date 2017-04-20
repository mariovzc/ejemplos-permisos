$('#role').on('change', function() {
    var n = this.value
    if(this.value == 1){
        $(".data-forms").show();
        $(".acciones-modal").show();
        $(".data-forms").show();
        $(".btn-editar").show();
        $(".btn-borrar").show();

    }else if(this.value == 2){
        $(".data-forms").show();
        $(".acciones-modal").show();
        $(".data-forms").show();
        $(".btn-borrar").hide();
        $(".btn-editar").show();

    }else{
        $(".btn-editar").hide();
        $(".btn-borrar").hide();
        $(".data-forms").hide();
        $(".acciones-modal").hide();
        $(".data-forms").hide();

    }

});