class PageUtil {
    static render(res, pageName, additionalParams = {}) {
        const defaultParams = { currentPage: pageName };
        const mergedParams = { ...defaultParams, ...additionalParams };
        res.render(pageName, mergedParams);
    };
}

export default PageUtil;