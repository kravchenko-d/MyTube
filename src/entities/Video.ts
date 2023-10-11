import Content from "./Content";

export default class Video {
    constructor(
        private content: Content | null = null,
        private preview: string, // ссылка на картинку
        private title: string,
        private channel: string,
        private length: string,
        private link: string, // ссылка на видео
        private views: number,
        private date: string,
        public category: string,
        private id: number = -1,
        public readonly element = document.createElement('div')
    ){
        this.element.classList.add('video')
    }

    render(){
        const preview = document.createElement('div')
        const description = document.createElement('div')
        description.classList.add('description')

        const img = document.createElement('img')
        img.src = this.preview
        img.alt = ''

        const title = document.createElement('div')
        const channel = document.createElement('div')
        const views = document.createElement('div')
        preview.appendChild(img)
        description.appendChild(title)
        description.appendChild(channel)
        description.appendChild(views)
        // description.appendChild(date)
        title.innerText = this.title
        channel.innerText = this.channel
        views.innerText = `${this.views} просмотров`

        this.element.innerHTML=''
        this.element.appendChild(preview)
        this.element.appendChild(description)
    }
}