// data/purchaseHealthHistory.js
export const purchaseHealthHistory = [
    {
      id: 1,
      date: '2024-03-15',
      totalAmount: 156.75,
      itemCount: 12,
      healthMetrics: {
        overallHealthScore: 82,
        categoryBreakdown: {
          fruits: { percentage: 25, score: 90 },
          vegetables: { percentage: 30, score: 95 },
          proteins: { percentage: 20, score: 85 },
          grains: { percentage: 15, score: 75 },
          snacks: { percentage: 10, score: 60 }
        },
        nutritionalBalance: {
          protein: { amount: '86g', score: 85 },
          fiber: { amount: '45g', score: 90 },
          sugar: { amount: '32g', score: 75 },
          saturatedFat: { amount: '15g', score: 70 }
        }
      },
      healthConcerns: [
        'High sugar content in snacks',
        'Low whole grain products'
      ],
      recommendations: [
        'Consider whole grain alternatives',
        'Add more leafy greens',
        'Reduce processed snacks'
      ],
      certifications: {
        organic: 65, // percentage of organic products
        nonGMO: 70,
        sustainable: 45
      },
      topHealthyItems: [
        { name: 'Organic Spinach', score: 98 },
        { name: 'Wild Salmon', score: 95 },
        { name: 'Quinoa', score: 92 }
      ]
    },
    {
      id: 2,
      date: '2024-03-08',
      totalAmount: 142.30,
      itemCount: 10,
      healthMetrics: {
        overallHealthScore: 75,
        categoryBreakdown: {
          fruits: { percentage: 20, score: 85 },
          vegetables: { percentage: 25, score: 90 },
          proteins: { percentage: 25, score: 80 },
          grains: { percentage: 20, score: 70 },
          snacks: { percentage: 10, score: 55 }
        },
        nutritionalBalance: {
          protein: { amount: '78g', score: 80 },
          fiber: { amount: '38g', score: 85 },
          sugar: { amount: '38g', score: 65 },
          saturatedFat: { amount: '18g', score: 65 }
        }
      },
      healthConcerns: [
        'Increased processed foods',
        'Higher sugar content'
      ],
      recommendations: [
        'Increase vegetable variety',
        'Choose leaner protein sources',
        'Add more fiber-rich foods'
      ],
      certifications: {
        organic: 55,
        nonGMO: 60,
        sustainable: 40
      },
      topHealthyItems: [
        { name: 'Greek Yogurt', score: 90 },
        { name: 'Brown Rice', score: 88 },
        { name: 'Mixed Berries', score: 95 }
      ]
    }
  ];