<template>
    <div class="container">
        <div class="rwo">
            <form class="col-md-8 text-center" @submit.prevent="sendMessages()">
                <input v-model="message" class="form-control" type="text" placeholder="Enter Your Message">      
            </form>
        </div>
         <div class="row">
             <div class="col-md-8">
                 <ul class="list-group" v-for="message in messages" :key="message">
                     <li class="list-group-itme" >{{message.message}}</li>
                 </ul>
             </div>
        </div>
    </div>
</template>

<script>
// import services from '../services/messages';
export default {
    created(){
         this.getMessages();
    },
    data() {
        return {
            messages:[{message: "", time: 0}],
            message: ""
        }
    },
    methods:{
        getMessages(){
            setInterval(async ()=>{
             let time = this.messages[this.messages.length -1].time
              console.log(time);
             if(!time) time=0;
             const that = this;
             const params = `?time=${time}`
             console.log(time);
            // const messages = await services.getMessages(params);
            try {
                const res = await fetch(`http://localhost:3000/messages/${params}`);
                const messages = await res.json();
               
                if(messages && messages.length > 0){
                   messages.map((newMessage) =>{
                        
                       that.messages.push(newMessage);
                       console.log(that.messages);
                  });
                console.log(`Updated my Array of Messages:  ${that.messages}`)
              }else{
                console.log("no msgs")  
              } 
            } catch (error) {
                console.log(error);
            }
              
            }, 5000);
        },
        async sendMessages(){
            const message = this.message;
            const messageObj = {message: message, time: new Date()}
        //    await services.postMessages(messageObj)
            await fetch("http://localhost:3000/messages/", {
            method: "POST",
            body: JSON.stringify({ messageObj }),
            headers: {
                "Content-Type": "application/json",
            },
            });
            this.message = "";
        },
        
    }
}
</script>