class FileStorage{
    constructor(filename,filedata){
        this.filename = filename
        this.filedata = filedata
        this.chunk_size = 1000000
        this.chunks = this.splitIntoChunks();
    }

    splitIntoChunks(){
        let chunks= []
        for(let i=0; i < this.filedata.length;i+=this.chunk_size){
            chunks.push(this.filedata.slice(i,i+this.chunk_size));
        }
        return chunks
    }

    generateId(){
        let chars = "abcdefghijklmnopqrstuvwxyz0123456789";
        let id = ""
        for(let i = 0; i<4; i++){
            id += chars[Math.floor(Math.random()*chars.length)]
        }
        return id
    }

    getChunkCount(){

        return this.chunks.length
    }

}

