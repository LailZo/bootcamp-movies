const controller = function() {

    const renderer = new Renderer()
    const start = function() {
        $('#search').on('click', () => {
            const val = $('input').val()
            $('input').val('')
            if(!val.trim())
                return

            
            $.get('/movies/'+val)
            .then(data => renderer.render(data))
        })
    }
    return {
        start: start
    }
}()


controller.start()


