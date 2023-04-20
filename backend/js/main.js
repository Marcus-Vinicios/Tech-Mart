$(() => {
    $(".fill-black").each((btn) => {
        if ($(btn).attr("id") != undefined && localStorage.getItem($(btn).attr("id")) != undefined) {
            if (localStorage.getItem($(btn).attr("id")) == 'on') {
                $(btn).removeClass("fill-black").addClass("fill-red")
            } else {
                $(btn).addClass("fill-black").removeClass("fill-red")
            }
        }
    })
})
$(".btn").click(function () {
    const id = $(this).attr("id")
    if ($(this).hasClass("fill-black")) {
        $(this).removeClass("fill-black").addClass("fill-red")
        localStorage.setItem(id, 'on')
    } else {
        $(this).addClass("fill-black").removeClass("fill-red")
        localStorage.setItem(id, 'off')
    }
})
$(".add-cart").click(function () {
    const id = $(this).attr("id")
    if ($(this).hasClass("add-cart")) {
        $(this).removeClass("add-cart").addClass("rmv-cart")
        localStorage.setItem(id, 'add-cart')
        alert('Adcionado ao carrinho!')
    } else {
        $(this).addClass("add-cart").removeClass("rmv-cart")
        localStorage.setItem(id, 'rmv-cart')
        alert('Removido do carrinho!')
    }
})