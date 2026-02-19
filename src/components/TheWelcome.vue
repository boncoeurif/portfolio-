<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import SupportIcon from './icons/IconSupport.vue'
import { warn } from 'vue'

const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
</script>

<template>
  <h1 class="header">Welcome to My Professional Skills</h1>
  
  <br>
  
  



  <WelcomeItem class="vue">

    <template #heading>
      <img src="C:\Users\Achille\mane\vue-mane\src\assets\vue.png" alt="vue" srcset="" width="50" height="40"><br> Vue
      js
      framwork</template>

    Senior to frontend Development using Vue js,
    specially developing Single Page Applications(SPA)
    And building interactive User Interface.

  </WelcomeItem>
  <br>
  <WelcomeItem class="php">

    <template #heading>
      <img src="C:\Users\Achille\mane\vue-mane\src\assets\ui-ux.png" alt="ui-ux" srcset="" width="50" height="40"
        class="my"><br>

      UI/UX Design</template>
    Senior in Designing Mockup,Wareframe;
    And prototyping.

    I can do that using Defference Sofwares such
    as Figma,Adobe XD And so on.

  </WelcomeItem>
  <br>
  <WelcomeItem class="php">

    <template #heading>
      <img src="C:\Users\Achille\mane\vue-mane\src\assets\php.svg" alt="php" srcset="" width="50" height="40"
        class="my"><br>
      PHP Programing</template>
    Expert in PHP Programing specially
    on backend part like developing database
    using MYSQL.
    Also i have skills in Managing Database
    using Database Management System(DBMS).

  </WelcomeItem>
  <br>
  <WelcomeItem class="php">

    <template #heading>
      <img src="C:\Users\Achille\mane\vue-mane\src\assets\NODE.png" alt="NODE" srcset="" width="50" height="40"
        class="my"><br>Developing Backend Applications Using Node js</template>
    Senior in Developing Backend Applications Like
    Developing Databases using mariaDB,mongoDB..,
    Managing Database And daveloping And calling API(Application Programing Interface).

  </WelcomeItem>


</template>
<style>
.header{
 font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; 
 color: skyblue;
}
.vue{
  
  color: white;
  border-radius: 8px;
  border: 2px solid white;
  display: flex;
  align-items: center;
  box-shadow: 0 0 20px rgba(1, 125, 17, 0.544);
}
.php{
  color: white;
  border-radius: 8px;
  border: 2px solid white;
  display: flex;
  align-items: center;
  box-shadow: 0 0 20px rgba(55, 0, 255, 0.5);
}
.my{
  border: 1px solid white;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
}
.logo{
  border-radius: 22px;
  display: block;
  margin: 0 auto 2rem;
  box-shadow: 0 0 20px rgba(55, 0, 255, 0.5);

}

</style>

