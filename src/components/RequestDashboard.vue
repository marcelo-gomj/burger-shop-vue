<template>
    <div id="burger-table">
        <div>
            <div id="burger-table-heading">
                <div class="order-id">#:</div>
                <div>Cliente:</div>
                <div>Pão:</div>
                <div>Carne:</div>
                <div>Opcionais:</div>
                <div>Acões:</div>
            </div>
        </div>
        <div id="buger-table-rows">
            <div class="burger-table-row">
                <div class="order-number">1</div>
                <div>João</div>
                <div>Pão de Trigo</div>
                <div>Maminha</div>

                <div>
                    <ul>
                        <li>Salame</li>
                        <li>Salame</li>
                    </ul>
                </div>
                <div>
                    <select name="status" class="status">
                        <option value="">Selecione o status do Hamburger</option>
                    </select>
                    <button class="delete-btn">Cancelar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>