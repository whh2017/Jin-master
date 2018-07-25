/**
 * author：温浩海
 * 存储用户登录状态 localStorage
 */
export const setStore = (name , content) => {
  if(!name) return;
  if(typeof content !== 'string'){
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name, content);

}

/**
 * 获取用户登录信息
 */
export const getStore = name => {
  if(!name) return;
  return window.localStorage.getItem(name);
}

/**
 *  删除用户登录信息
 */
export const removeStore = name => {
  if(!name) return;
  window.localStorage.removeItem(name);
}
