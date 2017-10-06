;((d => {
    window.template = function(id, data) {
        if (d.getElementById(id) !== null) {
            const pattern = d.getElementById(id).innerHTML;
            return Template7.compile(pattern)(data || {});
        }
        return '';
    }
}))(document);