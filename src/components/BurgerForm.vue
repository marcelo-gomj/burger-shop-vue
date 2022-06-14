<template>
  <div>
    <MessageForm :msg="msg" v-show="msg" />
    <div>
      <form action="" id="burger-form" @submit="createBurger">
        <div class="input-container">
          <label for="name">Nome do cliente</label>
          <input
            type="text"
            name="name"
            id="name"
            v-model="name"
            placeholder="Digite o seu nome:"
          />
        </div>

        <div class="input-container">
          <label for="bread">Escolha o pão: </label>
          <select name="bread" id="bread" v-model="bread">
            <option value="">Selecione o seu pão</option>
            <option v-for="bread in breads" :key="bread.id" :value="bread.tipo">
              {{ bread.tipo }}
            </option>
          </select>
        </div>

        <div class="input-container">
          <label for="meat">Escolha a carne do seu burger:</label>
          <select name="meat" id="meat" v-model="meat">
            <option value="">Selecione o tipo da carne</option>
            <option v-for="meat in meats" :key="meat.id" :value="meat.tipo">
              {{ meat.tipo }}
            </option>
          </select>
        </div>

        <div id="optionals-container" class="input-container">
          <label id="optionals-title" for="optionals"
            >Selecione os opcionais:</label
          >

          <div
            v-for="optional in optionalsData"
            :key="optional.id"
            class="checkbox-container"
          >
            <input
              type="checkbox"
              :value="optional.tipo"
              name="optionals"
              v-model="optionals"
            />
            <span>{{ optional.tipo }}</span>
          </div>
        </div>

        <div class="input-container">
          <input type="submit" class="submit-btn" value="Criar meu burger" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>

  import MessageForm from "./MessageForm.vue";


export default {
  name: "BurgerForm",
  components: {
    MessageForm
  },
  data() {
    return {
      breads: null,
      meats: null,
      optionalsData: null,
      name: null,
      bread: null,
      meat: null,
      optionals: [],
      msg: null,
    };
  },
  methods: {
    async getIngredientes() {
      const req = await fetch("http://localhost:3000/ingredientes");
      const data = await req.json();

      this.breads = data.paes;
      this.meats = data.carnes;
      this.optionalsData = data.opcionais;
    },

    async createBurger(e) {
      e.preventDefault();

      const data = {
        name: this.name,
        meat: this.meat,
        bread: this.bread,
        optionals: Array.from(this.optionals),
        status: "Solicitado",
      };

      const dataJson = JSON.stringify(data);

      const req = await fetch("http://localhost:3000/burgers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: dataJson,
      });

      const res = await req.json();


      if (res) {
        this.msg = `Pedido Nº ${res.id} realizado com sucesso`
        
        setTimeout(() => {
          this.msg = ""
        }, 3000)

        this.name = "";
        this.meat = "";
        this.bread = "";
        this.optionals = "";
      }
    },
  },

  mounted() {
    this.getIngredientes();
  },
};
</script>

<style>
#burger-form {
  max-width: 400px;
  margin: 0 auto;
}

.input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

label {
  font-weight: bold;
  margin-bottom: 15px;
  color: #222;
  padding: 5px 10px;
  border-left: 4px solid #fcba03;
}

input,
select {
  padding: 5px 10px;
  width: 300px;
}

#optionals-container {
  flex-direction: row;
  flex-wrap: wrap;
}

#optionals-title {
  width: 100%;
}

.checkbox-container {
  display: flex;
  align-items: flex-start;
  width: 50%;
  margin-bottom: 20px;
}

.checkbox-container span,
.checkbox-container input {
  width: auto;
}

.checkbox-container span {
  margin-left: 6px;
  font-weight: bold;
}

.submit-btn {
  background-color: #222;
  color: #fcba03;
  font-weight: bold;
  border: 2px solid #222;
  padding: 16px;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.5s;
}

.submit-btn:hover {
  background-color: transparent;
  color: #222;
}
</style>
