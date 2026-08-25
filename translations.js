/* ChurnShield — Translation strings (EN / AR)
   Each key maps to the data-i18n attribute on HTML elements.
   ─────────────────────────────────────────────────────────── */
var TRANSLATIONS = {
  en: {
    /* ── Navigation ── */
    'nav.dashboard':       'Dashboard',
    'nav.recommendations': 'Recommendations',

    /* ── Shared directional arrow ── */
    'arrow.right': '→',

    /* ── Home hero ── */
    'hero.eyebrow':       'Customer Churn Analytics',
    'hero.tagline':       'Understand why customers leave\u00A0\u2014 before they do.',
    'hero.cta.primary':   'View Dashboard',
    'hero.cta.secondary': 'See Recommendations',

    /* ── Home section labels ── */
    'section.metrics': 'Key Metrics',
    'section.explore': 'Explore',

    /* ── KPI card labels ── */
    'kpi.customers': 'Total Customers',
    'kpi.revenue':   'Revenue Lost to Churn',
    'kpi.churnrate': 'Churn Rate',
    'kpi.cltv':      'Avg Customer LTV',

    /* ── Home navigation cards ── */
    'navcard.dashboard.title': 'Churn Dashboard',
    'navcard.dashboard.desc':  'Explore contract types, payment methods, top churn reasons, and geographic distribution across the customer base.',
    'navcard.dashboard.arrow': 'Open Dashboard',
    'navcard.recs.title': 'Strategic Recommendations',
    'navcard.recs.desc':  'Four data-backed initiatives to reduce churn and recover retained revenue, ranked by expected business impact.',
    'navcard.recs.arrow': 'See Recommendations',

    /* ── Footer ── */
    'footer.text': 'ChurnShield \u2014 Customer Churn Analytics \u00A9 2025',

    /* ── Dashboard page ── */
    'page.dash.eyebrow': 'Interactive Analysis',
    'page.dash.title':   'Churn Analysis Dashboard',
    'page.dash.sub':     'Explore contract type, payment method, churn reasons, and geographic distribution across the customer base.',

    /* ── Dashboard tabs ── */
    'tab.home':  'Home',
    'tab.churn': 'Churn Overview',
    'tab.geo':   'Geographic Insights',

    /* ── Dashboard captions ── */
    'caption.home':  'Product landing page with navigation to both analysis views',
    'caption.churn': 'Contract type, payment method, and top churn reasons',
    'caption.geo':   'Churn concentration by city across California',

    /* ── Recommendations page ── */
    'page.recs.eyebrow': 'Data-Backed Actions',
    'page.recs.title':   'Strategic Recommendations',
    'page.recs.sub':     'Four data-backed initiatives to reduce churn and grow retained revenue, ranked by expected impact.',

    /* ── Impact banner ── */
    'banner.label': 'Revenue currently lost to churn \u2014 the addressable opportunity for these initiatives.',

    /* ── Shared rec labels ── */
    'impact.high':      'High Impact',
    'impact.medium':    'Medium Impact',
    'actions.label':    'Recommended Actions',
    'rec.effect.label': 'Expected effect:',

    /* ── Recommendation 1 ── */
    'rec1.title':   'Redesign the contract incentive structure',
    'rec1.finding': 'Month-to-month customers churn at 42.7%, vs 11.3% for one-year and 2.8% for two-year contracts.',
    'rec1.body':    'Customers on flexible, low-commitment plans have dramatically higher churn risk. Structuring meaningful incentives to move them to longer-term contracts addresses this gap directly.',
    'rec1.a1':      'Offer a meaningful discount for switching to annual billing',
    'rec1.a2':      'Target month-to-month customers past their 6-month mark with an upgrade offer',
    'rec1.a3':      'Test a price-lock guarantee for two-year contracts to boost conversion',
    'rec1.effect':  'Shifting even 15% of month-to-month customers to annual contracts could cut overall churn by several points.',

    /* ── Recommendation 2 ── */
    'rec2.title':   'Fix the support experience, not just the product',
    'rec2.finding': '\u201CAttitude of support person\u201D is the single most cited churn reason \u2014 ahead of price or competitor offers.',
    'rec2.body':    'Customer service interactions are actively driving cancellations. This is a high-leverage fix because it can be acted on immediately without product changes or pricing adjustments.',
    'rec2.a1':      'Audit support call quality specifically for the highest-churn customer segment',
    'rec2.a2':      'Introduce a retention-focused escalation path before cancellation is finalized',
    'rec2.a3':      'Track support satisfaction separately from overall CSAT to catch signal early',
    'rec2.effect':  'Directly addresses the top voluntary churn reason, independent of pricing changes.',

    /* ── Recommendation 3 ── */
    'rec3.title':   'Migrate customers off manual payment methods',
    'rec3.finding': 'Electronic check users churn at 45.3% \u2014 nearly 3\u00D7 higher than automatic bank transfer (16.7%) or credit card (15.2%).',
    'rec3.body':    'Friction in the billing process correlates strongly with disengagement and churn. Autopay creates \u201Cstickiness\u201D by reducing manual renewal decisions and payment failures.',
    'rec3.a1':      'Offer a one-time bill credit for switching to autopay',
    'rec3.a2':      'Make autopay the default option at signup and renewal',
    'rec3.a3':      'Flag electronic-check customers for proactive outreach ahead of renewal dates',
    'rec3.effect':  'An easy, low-cost lever compared to pricing or contract restructuring.',

    /* ── Recommendation 4 ── */
    'rec4.title':   'Bundle retention-driving add-ons into base plans',
    'rec4.finding': 'Customers without Tech Support churn at 41.6%, vs 15.2% for those who have it \u2014 the same pattern holds for Online Security.',
    'rec4.body':    'Value-added services like Tech Support and Online Security create genuine product dependency and perceived protection. Getting them into customers\u2019 hands early is a cost-effective retention strategy.',
    'rec4.a1':      'Free 3-month trial of Tech Support and Online Security for all new signups',
    'rec4.a2':      'Reframe add-ons as \u201Cprotection\u201D features in all marketing and onboarding materials',
    'rec4.a3':      'Prioritize add-on activation campaigns for the highest-risk customer segments',
    'rec4.effect':  'One of the most cost-effective retention levers identified in this analysis.',
  },

  ar: {
    /* ── Navigation ── */
    'nav.dashboard':       'لوحة البيانات',
    'nav.recommendations': 'التوصيات',

    /* ── Shared directional arrow (flipped for RTL) ── */
    'arrow.right': '←',

    /* ── Home hero ── */
    'hero.eyebrow':       'تحليلات فقدان العملاء',
    'hero.tagline':       'افهم لماذا يغادر عملاؤك \u2014 قبل حدوث ذلك.',
    'hero.cta.primary':   'عرض لوحة البيانات',
    'hero.cta.secondary': 'مطالعة التوصيات',

    /* ── Home section labels ── */
    'section.metrics': 'المؤشرات الرئيسية',
    'section.explore': 'استكشاف',

    /* ── KPI card labels ── */
    'kpi.customers': 'إجمالي العملاء',
    'kpi.revenue':   'إيرادات مفقودة بسبب الإلغاء',
    'kpi.churnrate': 'معدل الإلغاء',
    'kpi.cltv':      'متوسط القيمة الدائمة للعميل',

    /* ── Home navigation cards ── */
    'navcard.dashboard.title': 'لوحة بيانات الإلغاء',
    'navcard.dashboard.desc':  'استكشف أنواع العقود وطرق الدفع وأبرز أسباب الإلغاء والتوزيع الجغرافي للقاعدة العميلة.',
    'navcard.dashboard.arrow': 'فتح لوحة البيانات',
    'navcard.recs.title': 'التوصيات الاستراتيجية',
    'navcard.recs.desc':  'أربع مبادرات مدعومة بالبيانات لتقليل الإلغاء واسترداد الإيرادات، مرتبة حسب الأثر التجاري المتوقع.',
    'navcard.recs.arrow': 'مطالعة التوصيات',

    /* ── Footer ── */
    'footer.text': 'ChurnShield \u2014 تحليلات فقدان العملاء \u00A9 2025',

    /* ── Dashboard page ── */
    'page.dash.eyebrow': 'تحليل تفاعلي',
    'page.dash.title':   'لوحة تحليل معدل الإلغاء',
    'page.dash.sub':     'استكشف أنواع العقود وطرق الدفع وأسباب الإلغاء والتوزيع الجغرافي لقاعدة العملاء.',

    /* ── Dashboard tabs ── */
    'tab.home':  'الرئيسية',
    'tab.churn': 'نظرة عامة على الإلغاء',
    'tab.geo':   'رؤى جغرافية',

    /* ── Dashboard captions ── */
    'caption.home':  'الصفحة الرئيسية للمنتج مع روابط لعروض التحليل',
    'caption.churn': 'نوع العقد وطريقة الدفع وأبرز أسباب الإلغاء',
    'caption.geo':   'تركّز الإلغاء حسب المدينة عبر ولاية كاليفورنيا',

    /* ── Recommendations page ── */
    'page.recs.eyebrow': 'إجراءات مدعومة بالبيانات',
    'page.recs.title':   'التوصيات الاستراتيجية',
    'page.recs.sub':     'أربع مبادرات مدعومة بالبيانات لتقليل الإلغاء ورفع الإيرادات المحتجزة، مرتبة حسب التأثير المتوقع.',

    /* ── Impact banner ── */
    'banner.label': 'إيرادات تُفقد حالياً بسبب الإلغاء \u2014 الفرصة القابلة للمعالجة من خلال هذه المبادرات.',

    /* ── Shared rec labels ── */
    'impact.high':      'تأثير عالٍ',
    'impact.medium':    'تأثير متوسط',
    'actions.label':    'الإجراءات الموصى بها',
    'rec.effect.label': 'التأثير المتوقع:',

    /* ── Recommendation 1 ── */
    'rec1.title':   'إعادة تصميم هيكل حوافز العقود',
    'rec1.finding': 'يُلغي العملاء ذوو العقود الشهرية بنسبة 42.7%، مقارنةً بـ 11.3% للعقود السنوية و2.8% للعقود لمدة عامين.',
    'rec1.body':    'يمتلك العملاء المشتركون في الخطط المرنة وقليلة الالتزام مخاطر إلغاء أعلى بكثير. يعالج تصميم حوافز هادفة لتحويلهم إلى عقود طويلة الأمد هذه الفجوة بشكل مباشر.',
    'rec1.a1':      'تقديم خصم حقيقي للتحويل إلى الفوترة السنوية',
    'rec1.a2':      'استهداف العملاء الشهريين الذين تجاوزوا الشهر السادس بعرض ترقية',
    'rec1.a3':      'اختبار ضمان تثبيت السعر لعقود العامين لرفع معدل التحويل',
    'rec1.effect':  'تحويل 15% فقط من العملاء الشهريين إلى عقود سنوية يمكن أن يقلص معدل الإلغاء الإجمالي بعدة نقاط.',

    /* ── Recommendation 2 ── */
    'rec2.title':   'إصلاح تجربة الدعم، ليس المنتج فحسب',
    'rec2.finding': '\u201Cسلوك موظف الدعم\u201D هو السبب الأكثر استشهاداً للإلغاء \u2014 متجاوزاً السعر وعروض المنافسين.',
    'rec2.body':    'تُسهم تفاعلات خدمة العملاء بفاعلية في دفع الإلغاءات. يُعدّ هذا إصلاحاً عالي التأثير لأنه يمكن تطبيقه فوراً دون تغييرات في المنتج أو تعديلات في الأسعار.',
    'rec2.a1':      'مراجعة جودة مكالمات الدعم بشكل خاص لشريحة العملاء الأكثر إلغاءً',
    'rec2.a2':      'إدخال مسار تصعيد يركز على الاحتفاظ قبل إتمام الإلغاء',
    'rec2.a3':      'تتبع رضا الدعم بشكل منفصل عن مؤشر CSAT للكشف المبكر عن المشكلات',
    'rec2.effect':  'يعالج مباشرةً السبب الأول للإلغاء الطوعي، بمعزل عن تغييرات الأسعار.',

    /* ── Recommendation 3 ── */
    'rec3.title':   'ترحيل العملاء بعيداً عن طرق الدفع اليدوي',
    'rec3.finding': 'يُلغي مستخدمو الشيكات الإلكترونية بنسبة 45.3% \u2014 أعلى بنحو 3 أضعاف مقارنةً بالتحويل البنكي التلقائي (16.7%) أو بطاقة الائتمان (15.2%).',
    'rec3.body':    'يرتبط الاحتكاك في عملية الفوترة بقوة مع انفصال العملاء وإلغائهم. يُنشئ الدفع التلقائي "تثبيتاً" من خلال تقليل قرارات التجديد اليدوية وإخفاقات الدفع.',
    'rec3.a1':      'تقديم رصيد فاتورة لمرة واحدة للتحويل إلى الدفع التلقائي',
    'rec3.a2':      'جعل الدفع التلقائي الخيار الافتراضي عند التسجيل والتجديد',
    'rec3.a3':      'تحديد عملاء الشيكات الإلكترونية للتواصل الاستباقي قبل تواريخ التجديد',
    'rec3.effect':  'أداة سهلة ومنخفضة التكلفة مقارنةً بتغيير الأسعار أو إعادة هيكلة العقود.',

    /* ── Recommendation 4 ── */
    'rec4.title':   'دمج الإضافات المحفّزة للاحتفاظ ضمن الخطط الأساسية',
    'rec4.finding': 'يُلغي العملاء الذين لا يمتلكون الدعم التقني بنسبة 41.6%، مقارنةً بـ 15.2% لمن يمتلكونه \u2014 وينطبق النمط ذاته على الأمان الإلكتروني.',
    'rec4.body':    'تُنشئ الخدمات ذات القيمة المضافة كالدعم التقني والأمان الإلكتروني ارتباطاً حقيقياً بالمنتج وإحساساً بالحماية. إيصالها إلى العملاء مبكراً استراتيجية احتفاظ فعّالة من حيث التكلفة.',
    'rec4.a1':      'تجربة مجانية لمدة 3 أشهر للدعم التقني والأمان الإلكتروني لجميع المشتركين الجدد',
    'rec4.a2':      'إعادة تأطير الإضافات باعتبارها ميزات "حماية" في جميع المواد التسويقية والتعريفية',
    'rec4.a3':      'إعطاء الأولوية لحملات تفعيل الإضافات لشرائح العملاء الأعلى خطورةً',
    'rec4.effect':  'أحد أكثر عوامل الاحتفاظ فعالية من حيث التكلفة المحددة في هذا التحليل.',
  }
};
