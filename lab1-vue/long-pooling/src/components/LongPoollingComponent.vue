


<template>
    <div class="container mt-2" id="myApp">
           <form  @submit.prevent="onSubmit" >
            <div class="card-body">
              
                <div class="mb-3">
                        <div class="input-group is-invalid">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="validatedInputGroupPrepend">Messager</span>
                        </div>
                        <input type="text" v-model="msg.id"   class="form-control is-invalid" aria-describedby="validatedInputGroupPrepend" required>
                        </div>
                        <div class="invalid-feedback">
                            <!-- <input type="text" v-model="loop" @change="onChange"  >{{loop}} -->
                        </div>
                </div>
            </div>
            <div class="card-footer text-muted">
                <button class="btn btn-primary btn-block" >send</button>
            </div>
            </form>
                <ul>  
                    <li v-for="item in msgs" :key="item.id" >
                        {{item.id}}
                    </li>
                </ul>                   
    </div>   
</template>




<script>
export default {
   
    data(){
        return{
            msgs:[],
            msg:{'id':''},
            // loop: true
        }
    },
    methods:{
         onSubmit(e) {
                // const that =this ; 
                console.log(JSON.stringify(this.msg));
                fetch(`http://localhost:3000/messages`, { 
                    method: 'post', 
                    body: JSON.stringify(this.msg),
                    headers: new Headers({
                        'Content-Type':'application/json'
                    })
                }).then(() =>{
                    // console.log(res);
                    this.msg = {'id':''};
                    // this.onChange();                     
                } )          
        },
       
        onChange(e){
              
                console.log("listening");
                // const that = this ;
                fetch(`http://localhost:3000/messages/subscribe`, { 
                method: 'get', 
                headers: new Headers({
                    'Content-Type':'application/json'
                })
                }).then(res => res.json() ).then(res =>{
                 console.log(res);
                 this.msgs.push(res)
                 console.log(this.msgs)
                console.log("stop listening");
                this.onChange();
                } )   
                console.log("out listening");
                
                // this.loop = this.loop ? false : true ;
                
        },
        // getMessage(){
        //     const message = service.getMessage();
        //     this.getMessage();
        // }
    },
    // watch: {
    //     msgs : function() {
    //             console.log("watch");
    //             this.onChange();
    //         }       
    // },
    mounted() {
        // this.loop = true
       this.onChange();
        
    }
    
   
}

</script>


<style>
        .less {
            color: red;
        }
        .equal {
            color: yellow;
        }
        .more{
            color: blue;
        }
</style>