var model = {};

function validate(params, key, type, required) {
    var value;
    value = params[key];
    if (required) {
        if (!value) {
            alert(
                key +
                    " ÃÂ¾ÃÂ±Ã‘ÂÃÂ·ÃÂ°Ã‘â€šÃÂµÃÂ»Ã‘Å’ÃÂ½Ã‘â€¹ÃÂ¹ ÃÂ¿ÃÂ°Ã‘â‚¬ÃÂ°ÃÂ¼ÃÂµÃ‘â€šÃ‘â‚¬"
            );
            return;
        }
        if (type && !typeof value === type) {
            alert(
                key +
                    " ÃÂ´ÃÂ¾ÃÂ»ÃÂ¶ÃÂµÃÂ½ ÃÂ±Ã‘â€¹Ã‘â€šÃ‘Å’ Ã‘â€šÃÂ¸ÃÂ¿ÃÂ° " +
                    type
            );
            return;
        }
    }
    if (value) {
        if (type && !typeof value === type) {
            alert(
                key +
                    " ÃÂ´ÃÂ¾ÃÂ»ÃÂ¶ÃÂµÃÂ½ ÃÂ±Ã‘â€¹Ã‘â€šÃ‘Å’ Ã‘â€šÃÂ¸ÃÂ¿ÃÂ° " +
                    type
            );
            return;
        }
    }
    model[key] = value;
    return value;
}

function get_params() {
    var queryset_params, version;

    version = "1.0.0";
    if (model.version === "2.0.0") {
        version = model.version;
    }
    queryset_params = {
        account: model.account || "",
        store_id: model.store_id || "",
        terminal_id: model.terminal_id,
        fail_redirect: model.fail_redirect,
        success_redirect: model.success_redirect,
        version: version,
        amount: model.amount,
        details: model.details,
        lang: model.lang,
        key: model.key,
        theme: model.theme,
        color1: model.color1,
        color2: model.color2,
        color3: model.color3,
        color4: model.color4,
        color5: model.color5,
        color6: model.color6,
        color7: model.color7,
        color8: model.color8,
        color9: model.color9,
        color10: model.color10
    };

    return Util.params(queryset_params);
}
function paymo_open_widget(params) {
    var setGood, pt_enabled, pt_disabled;
    // pt_enabled = params.pt_enabled;
    // pt_disabled = params.pt_disabled;
    //
    // if (Array.isArray(pt_enabled) && pt_enabled.length) {
    //     model["pt_enabled"] = pt_enabled;
    // }

    // if (Array.isArray(pt_disabled) && pt_disabled.length) {
    //     model["pt_disabled"] = pt_disabled;
    // }

    validate(params, "store_id", "str", true);
    validate(params, "account", "str", true);
    validate(params, "terminal_id", "str", false);
    validate(params, "success_redirect", "str", true);
    validate(params, "fail_redirect", "str", true);
    validate(params, "version", "str", false);
    validate(params, "amount", "long", true);
    validate(params, "details", "str", false);
    validate(params, "lang", "str", false);
    validate(params, "key", "str", true);
    validate(params, "theme", "str", false);
    validate(params, "color1", "str", false);
    validate(params, "color2", "str", false);
    validate(params, "color3", "str", false);
    validate(params, "color4", "str", false);
    validate(params, "color5", "str", false);
    validate(params, "color6", "str", false);
    validate(params, "color7", "str", false);
    validate(params, "color8", "str", false);
    validate(params, "color9", "str", false);
    validate(params, "color10", "str", false);
    setGood = function() {
        open_iframe();
    };

    return setGood();
}

function open_iframe() {
    var e,
        frame_height,
        frame_width,
        iframe,
        iframe_block,
        iframe_block_style,
        main_before_block,
        main_block,
        main_block_before_style,
        main_block_cell_style,
        main_block_style,
        main_cell_block,
        parent,
        query_string,
        ref,
        style;

    // frame_width = 400;
    // frame_height = 650;

    if (Util.ismobile()) {
        frame_width = 100 + "%";
        frame_height = 100 + "%";
    } else {
        frame_width = 400;
        frame_height = 650;
    }
    query_string = get_params();
    main_block_style =
        "position: fixed; top: 0; right: 0; bottom: 0; left: 0; z-index: 1000000; text-align: center; background-color: rgba(0, 0, 0, 0.3);";
    main_block = document.createElement("div");
    Util.css(main_block, main_block_style);
    main_block.onclick = function(e) {
        var src;
        src = this;
        return Util.remove(src);
    };
    var iframeColor = "#ffffff";
    if (model.color1 && !model.theme) iframeColor = model.color1;

    main_block_before_style =
        "height: 100%; display: inline-block; vertical-align: middle; content: '';";
    main_before_block = document.createElement("div");
    Util.css(main_before_block, main_block_before_style);
    Util.append(main_block, main_before_block);
    main_block_cell_style = "display: inline-block; vertical-align: middle;";
    if (Util.ismobile()) {
        main_block_cell_style =
            "-webkit-overflow-scrolling: touch; overflow-y: scroll; width: 95%; height: 95%; display: inline-block; vertical-align: middle; border-radius: 1rem";
    } else {
        main_block_cell_style =
            "display: inline-block; vertical-align: middle;";
    }
    main_cell_block = document.createElement("div");
    Util.css(main_cell_block, main_block_cell_style);
    Util.append(main_block, main_cell_block);
    if (Util.ismobile()) {
        iframe_block_style =
            "display: inline-block;position:relative; width: 100%; height: 100%;";
    } else {
        iframe_block_style =
            "display: inline-block;position:relative; width: 400px; height: 650px;";
    }

    iframe_block = document.createElement("div");
    Util.css(iframe_block, iframe_block_style);
    Util.append(main_cell_block, iframe_block);
    if (Util.ismobile()) {
        style =
            "width: 100%; height: 100%; overflow: auto; border: none; border-radius: 1rem;";
    } else {
        style =
            "border: none; border-radius: 1rem; margin-bottom: 1rem; box-shadow: 0 1.188rem 2.375rem rgba(0,0,0,.3),0 .938rem .75rem rgba(0,0,0,.22);";
    }
    if (Util.ismobile()) {
        close_block_style =
            "display: block;cursor: pointer;content:'';width: 24px;height: 24px;position: absolute;right: 15px;top: 16px;background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDIxLjkgMjEuOSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjEuOSAyMS45IiB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4Ij4KICA8cGF0aCBkPSJNMTQuMSwxMS4zYy0wLjItMC4yLTAuMi0wLjUsMC0wLjdsNy41LTcuNWMwLjItMC4yLDAuMy0wLjUsMC4zLTAuN3MtMC4xLTAuNS0wLjMtMC43bC0xLjQtMS40QzIwLDAuMSwxOS43LDAsMTkuNSwwICBjLTAuMywwLTAuNSwwLjEtMC43LDAuM2wtNy41LDcuNWMtMC4yLDAuMi0wLjUsMC4yLTAuNywwTDMuMSwwLjNDMi45LDAuMSwyLjYsMCwyLjQsMFMxLjksMC4xLDEuNywwLjNMMC4zLDEuN0MwLjEsMS45LDAsMi4yLDAsMi40ICBzMC4xLDAuNSwwLjMsMC43bDcuNSw3LjVjMC4yLDAuMiwwLjIsMC41LDAsMC43bC03LjUsNy41QzAuMSwxOSwwLDE5LjMsMCwxOS41czAuMSwwLjUsMC4zLDAuN2wxLjQsMS40YzAuMiwwLjIsMC41LDAuMywwLjcsMC4zICBzMC41LTAuMSwwLjctMC4zbDcuNS03LjVjMC4yLTAuMiwwLjUtMC4yLDAuNywwbDcuNSw3LjVjMC4yLDAuMiwwLjUsMC4zLDAuNywwLjNzMC41LTAuMSwwLjctMC4zbDEuNC0xLjRjMC4yLTAuMiwwLjMtMC41LDAuMy0wLjcgIHMtMC4xLTAuNS0wLjMtMC43TDE0LjEsMTEuM3oiIGZpbGw9IiNGRkZGRkYiLz4KPC9zdmc+Cg==);";
    } else {
        close_block_style =
            "display: block;cursor: pointer;content: '';width: 24px;height: 24px;position: absolute;right: -39px;top: 0px;background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDIxLjkgMjEuOSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjEuOSAyMS45IiB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4Ij4KICA8cGF0aCBkPSJNMTQuMSwxMS4zYy0wLjItMC4yLTAuMi0wLjUsMC0wLjdsNy41LTcuNWMwLjItMC4yLDAuMy0wLjUsMC4zLTAuN3MtMC4xLTAuNS0wLjMtMC43bC0xLjQtMS40QzIwLDAuMSwxOS43LDAsMTkuNSwwICBjLTAuMywwLTAuNSwwLjEtMC43LDAuM2wtNy41LDcuNWMtMC4yLDAuMi0wLjUsMC4yLTAuNywwTDMuMSwwLjNDMi45LDAuMSwyLjYsMCwyLjQsMFMxLjksMC4xLDEuNywwLjNMMC4zLDEuN0MwLjEsMS45LDAsMi4yLDAsMi40ICBzMC4xLDAuNSwwLjMsMC43bDcuNSw3LjVjMC4yLDAuMiwwLjIsMC41LDAsMC43bC03LjUsNy41QzAuMSwxOSwwLDE5LjMsMCwxOS41czAuMSwwLjUsMC4zLDAuN2wxLjQsMS40YzAuMiwwLjIsMC41LDAuMywwLjcsMC4zICBzMC41LTAuMSwwLjctMC4zbDcuNS03LjVjMC4yLTAuMiwwLjUtMC4yLDAuNywwbDcuNSw3LjVjMC4yLDAuMiwwLjUsMC4zLDAuNywwLjNzMC41LTAuMSwwLjctMC4zbDEuNC0xLjRjMC4yLTAuMiwwLjMtMC41LDAuMy0wLjcgIHMtMC4xLTAuNS0wLjMtMC43TDE0LjEsMTEuM3oiIGZpbGw9IiNGRkZGRkYiLz4KPC9zdmc+Cg==);";
    }
    close_block = document.createElement("div");
    Util.css(close_block, close_block_style);
    Util.append(iframe_block, close_block);
    close_block.onclick = function(e) {
        var src;
        src = main_block;
        return Util.remove(src);
    };
    style =
        "border: none; border-radius: 10px; margin-bottom: 1rem; box-shadow: 0 1.188rem 2.375rem rgba(0,0,0,.3),0 .938rem .75rem rgba(0,0,0,.22);";
    iframe = document.createElement("iframe");
    Util.addAttr(iframe, "id", "paymo_frame");
    Util.addAttr(iframe, "frameborder", 0);
    Util.addAttr(iframe, "scrolling", "yes");
    Util.addAttr(
        iframe,
        "src",
        "https://checkout.pays.uz/frame?" + query_string
    );
    if (!Util.ismobile()) {
        Util.addAttr(iframe, "width", frame_width);
        Util.addAttr(iframe, "height", frame_height);
    }
    Util.addAttr(iframe, "width", frame_width);
    Util.addAttr(iframe, "height", frame_height);
    Util.css(iframe, style);
    Util.append(iframe_block, iframe);
    parent = ref = document.getElementsByTagName("body")[0];
    return Util.append(parent, main_block);
}

this.Util = (function() {
    function Util() {}

    Util.find = function(name) {
        var el, k, len1, ref, reg, results;
        if (
            typeof document.getElementById === "function" &&
            indexOf.call(name[0], "#") >= 0
        ) {
            return document.getElementById(name.slice(1, name.length));
        }
        if (typeof document.getElementsByClassName === "function") {
            return document.getElementsByClassName(name);
        } else if (typeof document.querySelectorAll === "function") {
            return document.querySelectorAll("." + name);
        } else {
            reg = new RegExp("(^|\\s)" + name + "(\\s|$)");
            ref = document.getElementsByTagName("*");
            results = [];
            for (k = 0, len1 = ref.length; k < len1; k++) {
                el = ref[k];
                if (reg.test(el.className)) {
                    results.push(el);
                }
            }
            return results;
        }
    };

    Util.addAttr = function(element, attr, value) {
        return element.setAttribute(attr, value);
    };

    Util.hasAttr = function(element, attr) {
        var node;
        if (typeof element.hasAttribute === "function") {
            return element.hasAttribute(attr);
        } else {
            node = element.getAttributeNode(attr);
            return !(node && (node.specified || node.nodeValue));
        }
    };

    Util.addClass = function(element, name) {
        return (element.className += " " + name);
    };

    Util.hasClass = function(element, name) {
        return indexOf.call(element.className.split(" "), name) >= 0;
    };

    Util.css = function(element, css) {
        return (element.style.cssText += ";" + css);
    };

    Util.insertBefore = function(element, child) {
        return element.parentNode.insertBefore(child, element);
    };

    Util.insertAfter = function(element, child) {
        return element.parentNode.insertBefore(child, element.nextSibling);
    };

    Util.insertText = function(element, text) {
        var text_element;
        text_element = document.createTextNode(text);
        return element.appendChild(text_element);
    };

    Util.append = function(element, child) {
        return element.appendChild(child);
    };

    Util.remove = function(element) {
        var _ref;
        if ((_ref = element.parentNode) != null) {
            return _ref.removeChild(element);
        } else {
            return void 0;
        }
    };

    Util.parents = function(node) {
        var ancestors, results1;
        ancestors = [];
        results1 = [];
        while (
            (node = node.parentNode) &&
            node !== document &&
            __indexOf_.call(ancestors, node) < 0
        ) {
            results1.push(ancestors.push(node));
        }
        return results1;
    };

    Util.resolve = function(url) {
        var parser;
        parser = document.createElement("a");
        parser.href = url;
        return "" + parser.href;
    };

    Util.text = function(element, value) {
        if ("innerText" in element) {
            element.innerText = value;
        } else {
            element.textContent = value;
        }
        return value;
    };

    Util.params = function(pr) {
        var d, key, value, vb;
        d = [];
        vb = /%20/g;
        for (key in pr) {
            value = pr[key];
            if (typeof value === "function") {
                value = value();
                if (value === null) {
                    value = "";
                }
            } else if (typeof value === "object") {
                value = JSON.stringify(value);
            }
            d.push(encodeURIComponent(key) + "=" + encodeURIComponent(value));
        }
        return d.join("&").replace(vb, "+");
    };

    Util.ismobile = function() {
        //      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        if (
            /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            )
        ) {
            return true;
        } else return false;
    };

    return Util;
})();
