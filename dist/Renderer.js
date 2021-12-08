class Renderer {

    constructor() {
        this.template = Handlebars.compile($('#movie-handlebar').html())
    }


    render(data) {
        $('#movies').empty().append(this.template({movies: data}))
    }
}