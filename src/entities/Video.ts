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

        const length = document.createElement('span')
        preview.appendChild(length)
        length.innerText = this.length

        const title = document.createElement('div')
        const channel = document.createElement('div')
        const metadata = document.createElement('div')
        metadata.classList.add('metadata')
        const views = document.createElement('div')
        const date = document.createElement('div')
        preview.appendChild(img)
        description.appendChild(title)
        description.appendChild(channel)
        description.appendChild(metadata)
        metadata.appendChild(views)
        metadata.appendChild(date)
        const a = document.createElement('a')
        a.href = this.link
        title.innerText = this.title
        channel.innerText = this.channel
        views.innerText = `${this.views} просмотров •`
        date.innerText = this.date

        this.element.innerHTML=''
        this.element.appendChild(a)
        a.appendChild(preview)
        a.appendChild(description)
    }
}