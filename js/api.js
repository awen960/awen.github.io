async function getDetail() {
    let result = await axios({
        url: "https://www.mxnzp.com/api/daily_word/recommend",
        method: 'GET',
        params: {
            count: 1,
            app_id: 'rtuqqgjivlgqijgs',
            app_secret: 'TWprbVRWd3loYWpjaThSUDZQQ29JZz09'
        }
    })
    console.log("成功了", result.data.data[0].content)
    return result.data.data[0].content
}

export default getDetail();