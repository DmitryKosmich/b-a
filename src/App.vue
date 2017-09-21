<template>
  <div id="app">
    <b-container fluid>
      <b-navbar toggleable="md" type="light" variant="light">
        <b-nav-toggle target="nav_collapse"></b-nav-toggle>
        <b-navbar-brand href="#"><img src="./assets/images/logo.png"></b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">
          <!-- Right aligned nav items -->
          <b-nav is-nav-bar class="ml-auto">
            <b-nav-form>
              <b-input-group>
                <!-- Main form input -->
                <b-form-input size="sm" type="search" placeholder="Search"></b-form-input>

                <!-- Attach Right button Group via slot -->
                <b-input-group-button slot="right">
                  <b-btn size="sm" class="btn-outline-secondary" type="submit" >Search</b-btn>
                </b-input-group-button>

              </b-input-group>
            </b-nav-form>

            <b-nav-item-dropdown text="Currency" right>
              <b-dropdown-item href="#">BYN</b-dropdown-item>
              <b-dropdown-item href="#">RUB</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown text="Basket" right>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Signout</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-nav>
        </b-collapse>
      </b-navbar>
      <b-row>
        <b-col cols="12" md="3">
          <aside>
            <b-nav vertical>
              <b-nav-item to="bags">Сумки</b-nav-item>
              <b-nav-item to="claims">Клатчи</b-nav-item>
              <b-nav-item to="wallets">Кошельки</b-nav-item>
              <b-nav-item to="belts">Ремни</b-nav-item>
              <b-nav-item to="watches">Часы</b-nav-item>
              <b-nav-item to="designers">Дизайнеры</b-nav-item>
              <b-nav-item to="lookbook">Lookbook</b-nav-item>
              <b-nav-item to="sale">Sale</b-nav-item>
              <b-nav-item to="special-offers">Специальные предложения</b-nav-item>
              <b-nav-item to="contacts">Контакты</b-nav-item>
            </b-nav>
          </aside>
        </b-col>
        <b-col cols="12" md="9">
          <router-view></router-view>
        </b-col>
      </b-row>
      <footer>
        <b-row>
          <b-col cols="12" md="3">
            Помощь
          </b-col>
          <b-col cols="12" md="3">
            Связаться с нами
          </b-col>
          <b-col cols="12" md="3">
            Телефон
          </b-col>
          <b-col cols="12" md="3">
            Способы оплаты
          </b-col>
        </b-row>
      </footer>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
