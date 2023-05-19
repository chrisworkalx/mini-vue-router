export default {
  name: 'RouterLink',
  props: {
    to: {
      type: [String, Object],
      require: true
    }
  },
  render(h) {
    const href = typeof this.to === 'string' ? this.to : this.to.path;
    const router = this.$router;
    let data = {
      attrs: {
        href: router.mode === 'hash' ? '#' + href : href
      },
      on: {
        click: (e) => {
          e.preventDefault();
          router.push(href);
        }
      }
    };
    return h('a', data, this.$slots.default);
  }
};
