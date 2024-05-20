const categoryColorMap = new Map();

categoryColorMap.set('Product Review', 'orange')
categoryColorMap.set('Opinions', 'green')
categoryColorMap.set('Travel Guides', 'purple')

const getCategoryColor = (category: any) => {
    return categoryColorMap.get(category)
}

export default getCategoryColor