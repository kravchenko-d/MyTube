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
        private channel_icon: string,
        public readonly element = document.createElement('div')
    ){
        this.element.classList.add('video')
    }

    render(){
        const preview = document.createElement('div')
        const video_data = document.createElement('div')
        video_data.classList.add('video-data')
        const description = document.createElement('div')
        description.classList.add('description')

        const img = document.createElement('img')
        img.src = this.preview
        img.alt = `${this.title}`

        const channel_icon_div = document.createElement('div')
        const channel_icon = document.createElement('img')
        channel_icon.src = this.channel_icon
        channel_icon.alt = ''
        channel_icon_div.appendChild(channel_icon)

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

        video_data.appendChild(channel_icon_div)
        video_data.appendChild(description)

        this.element.innerHTML=''
        this.element.appendChild(a)
        a.appendChild(preview)
        a.appendChild(video_data)
    }
}