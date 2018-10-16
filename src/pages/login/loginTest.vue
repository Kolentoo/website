


<template>
  <div style="width: 100%;height: 100%">
    <mu-container>
      <mu-form ref="form" :model="validateForm" class="mu-demo-form">
        <mu-form-item label="用户名" label-position="left" prop="username" :rules="usernameRules">
          <mu-text-field v-model="validateForm.username" prop="username"></mu-text-field>
        </mu-form-item>
        <mu-form-item label="密码" label-position="left" prop="password" :rules="passwordRules">
          <mu-text-field type="password" v-model="validateForm.password" prop="password"></mu-text-field>
        </mu-form-item>
        <!--<mu-form-item prop="isAgree" label-position="left" :rules="agreeRules">
          <mu-checkbox label="同意用户协议" v-model="validateForm.isAgree"></mu-checkbox>
        </mu-form-item>-->
        <mu-form-item>
          <mu-button color="primary" @click="submit">提交</mu-button>
          <mu-button @click="clear">重置</mu-button>
        </mu-form-item>
      </mu-form>
    </mu-container>
  </div>
</template>

<script>
    export default {
      name: "login_test",
      mounted:function () {
        this.mui.alert("test");
        plus.webview.getWebviewById("sidebar");
      },
      data(){
        return {
          usernameRules: [
            { validate: (val) => !!val, message: '必须填写用户名'},
            { validate: (val) => val.length >= 3, message: '用户名长度大于3'}
          ],
          passwordRules: [
            { validate: (val) => !!val, message: '必须填写密码'},
            { validate: (val) => val.length >= 3 && val.length <= 10, message: '密码长度大于3小于10'}
          ],
          //agreeRules: [{ validate: (val) => !!val, message: '必须同意用户协议'}],
          validateForm: {
            username: '',
            password: '',
            isAgree: false
          }
        }
      },
      methods: {
        testLogin(){
          this.$store.dispatch('changeBAuth',true).then(
            res => {
              console.log("now login");
              this.$router.push({ path: this.$route.query.redirect==null?'/':this.$route.query.redirect })
            }
          );
        },
        submit () {
          this.$refs.form.validate().then((result) => {
            console.log('form valid: ', result);
            if(!result)return;
            this.testLogin();
          });
        },
        clear () {
          this.$refs.form.clear();
          this.validateForm = {
            username: '',
            password: '',
            isAgree: false
          };
        }
      }
    }
</script>

<style scoped>
  .mu-demo-form {
    width: 100%;
    max-width: 460px;
  }
</style>
