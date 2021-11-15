
var app = new Vue ({
    el:'#root',
       
         data:{
             contatore :0,
             foto:['img/pistornile1.jpg','img/pistornile2.jpg','img/pistornile3.jpg','img/pistornile4.jpg','img/pistornile5.jpg',
                   'img/pistornile6.jpg','img/pistornile7.jpg','img/pistornile9.jpg','img/pistornile10.jpg'
            ],
         },
         methods:{
             
           
             next(){
                 this.contatore ++
 
                 if(this.contatore > (this.foto.length -1)){
 
                     this.contatore = 0
 
                     
                 }
             },

             clickCircle(index){
                 this.contatore = index
             },
 
             
 
             
                 
             
 
 
             prev(){
                 this.contatore --
 
                 if(this.contatore < 0){
 
                     this.contatore = (this.foto.length -1)
                    
                 }
                 
             },
 
           
 
          
             
            
    
                                     
        
         },
 
      
         
 
 })
















var menuNav = $('.menu_navigazione')

var menuButtons = [
    {box:'class="ButtonMenu"',text:'FOTOGRAFIE',sfondoButton:'white',color:'rgb(78, 7, 7)',link:'#mainBox1'},
    {box:'class="ButtonMenu"',text:'IL COMITATO',sfondoButton:'white',color:'rgb(78, 7, 7)',link:'#mainBox2'},
    {box:'class="ButtonMenu"',text:'STORIA',sfondoButton:'white',color:'rgb(78, 7, 7)',link:'#mainBox3'},
    {box:'class="ButtonMenu"',text:'EVENTI',sfondoButton:'white',color:'rgb(78, 7, 7)',link:'#mainBox4'},
];


print(menuButtons, menuNav)


var menuSocial = $('.menu_social')
var socialIcons = [
    {box:'class="social"',text:'<i class="fab fa-facebook"></i>',sfondoButton:'wheat',color:'rgb(78, 7, 7)',link:'https://www.facebook.com/ilpistornile/'},
    {box:'class="social"',text:'<i class="fas fa-envelope"></i>',sfondoButton:'wheat',color:'rgb(78, 7, 7)',link:'mailto:ilpistornile@gmail.com'},
    {box:'class="social"',text:'<i class="fab fa-instagram"></i>',sfondoButton:'wheat',color:'rgb(78, 7, 7)',link:''},
    {box:'class="social"',text:'<i class="fab fa-twitter"></i> ',sfondoButton:'wheat',color:'rgb(78, 7, 7)',link:''},
];

print(socialIcons, menuSocial)

function print(array, container){
       
       array.forEach(element => {
            
               const {box, text, sfondoButton, color, link}= element

                 container.append(`
                      <div  style="background-color:${sfondoButton}; color:${color}"  ${box}  >
                           <a style="text-decoration:none;color:${color}" href="${link}"><span>${text}</span></a>
                     </div>
                 `)
       });

}

