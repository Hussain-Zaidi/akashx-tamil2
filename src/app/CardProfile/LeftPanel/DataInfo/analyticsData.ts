// analyticsData.ts

export interface PitchAdherence {
  score: number;
  justification: string;
  improvement_suggestion: string;
}

export interface Confidence {
  score: number;
  justification: string;
  improvement_suggestion: string;
}

export interface TechnicalKnowledge {
  score: number;
  justification: string;
  improvement_suggestion: string;
}

export interface CustomerPainPointsConnection {
  score: number;
  justification: string;
  improvement_suggestion: string;
}

export interface ActiveDemonstration {
  score: number;
  justification: string;
  improvement_suggestion: string;
}

export interface EyeContact {
  score: number;
  justification: string;
  improvement_suggestion: string;
}

export interface BodyLanguage {
  score: number;
  justification: string;
  improvement_suggestion: string;
}

export interface Gestures {
  score: number;
  justification: string;
  improvement_suggestion: string;
}

export interface Appearance {
  score: number;
  justification: string;
  improvement_suggestion: string;
}

export interface DynamicDeliveryAnalysis {
  highlights: string;
  lowlights: string;
}

export interface AnalyticsReport {
  pitch_adherence: PitchAdherence;
  confidence: Confidence;
  technical_knowledge: TechnicalKnowledge;
  customer_pain_points_connection: CustomerPainPointsConnection;
  active_demonstration: ActiveDemonstration;
  eye_contact: EyeContact;
  body_language: BodyLanguage;
  gestures: Gestures;
  appearance: Appearance;
  dynamic_delivery_analysis: DynamicDeliveryAnalysis;
  overall_summary: string;
  final_improvement_suggestion: string;
  key_coaching_takeaway: string;
}

export const analyticsReport: AnalyticsReport = {
  pitch_adherence: {
    score: 3,
    justification: "Your delivery showed good vocal variety, with your tone varying nicely to show enthusiasm (pitch standard deviation was high), which is great. However, your speaking pace was quite fast, consistently around 5.5 words per second, especially noticeable in segments like [27.7-104.9] where multiple features were explained rapidly. This fast pace, while energetic, sometimes made the pitch feel rushed, potentially overwhelming the listener. Additionally, some moments of less dynamic body language, such as hands being clasped at [07:38], lessened the natural, conversational flow.",
    improvement_suggestion: "Practice moderating your speaking pace, particularly when introducing new or complex features like the convertible options. Integrate more natural pauses to allow information to sink in and to create a more conversational rhythm. Ensure your gestures remain open and dynamic, avoiding static positions to maintain visual engagement and align with a natural, engaging communication style."
  },
  confidence: {
    score: 4,
    justification: "You projected a strong sense of confidence through your clear vocal delivery and varied tone. When you were on camera, your eye contact was consistently good, such as at [00:27] and [02:04], which helped build rapport. Your purposeful gestures, like pointing directly at the product feature at [02:24], further reinforced your self-assurance and knowledge. This overall presentation indicated that you were well-prepared and believed in the product.",
    improvement_suggestion: "Maintain your assertive vocal tone and clear delivery. To further enhance your confident presence, ensure your body language remains consistently open and engaged. Be mindful of any moments where your hands might become static, as continuous expressive gestures can amplify your confident demeanor."
  },
  technical_knowledge: {
    score: 5,
    justification: "You demonstrated exceptional technical knowledge of the refrigerator. You clearly articulated complex features such as the '4-in-1 convertible option' [37.0-57.0], 'Nano Sheet Technology' [152.1-161.3], and the 'Moisture Control' for vegetables [206.8-215.3]. Your ability to compare these features favorably against competitor brands (e.g., adjustable trays at [187.4-195.4]) further underscored your expertise. The precise visual demonstration at [02:24], where you pointed out internal components, made your explanations highly effective and easy to follow.",
    improvement_suggestion: "Your technical knowledge is outstanding. To make it even more impactful for non-technical customers, consider using a simple analogy or a brief 'what this means for you' statement after explaining a technical term. This will help customers fully grasp the practical benefit of your deep product understanding."
  },
  customer_pain_points_connection: {
    score: 4,
    justification: "You made good connections between product features and customer benefits, effectively addressing potential pain points. For example, you highlighted how the '4-in-1 convertible option' [66.2-84.3] offers energy savings by allowing users to cool only what's needed, directly tackling the concern of high electricity bills. You also addressed food spoilage by explaining how 'Moisture Control' [217.3-239.1] prevents condensation, a common issue in food preservation. Your demonstration of features visually supported these benefits.",
    improvement_suggestion: "To strengthen this area, explicitly state the customer's pain point upfront before offering your solution. For instance, 'Are you worried about uneven cooling ruining your food?' then introduce how features like 'Balanced Cooling' [416.2-422.7] (as highlighted by the coach) directly solve this. This problem-solution approach will resonate more deeply and emphasize the value of your product."
  },
  active_demonstration: {
    score: 5,
    justification: "You engaged very effectively in active demonstration, making the product features tangible for the audience. A prime example is at [02:24], where you used your hand to specifically point to the areas you were explaining, making internal features clear. The mention of 'வெளிய எடுத்து கம்பேர் பண்ணி காமிங்க' (take it out and show to compare) at [376.0-384.7] suggests a readiness for hands-on, comparative showing, which is highly effective in retail. Even when your face was out of frame at [04:16], it was in service of focusing on the product, which is appropriate for a detailed demo.",
    improvement_suggestion: "Continue your excellent use of active, hands-on demonstrations. When discussing adjustable features, like the trays [187.4-195.4], physically show the adjustability to highlight the product's versatility and user-friendliness. Consider incorporating small, interactive elements that invite the customer to imagine using the product."
  },
  eye_contact: {
    score: 4,
    justification: "Your eye contact was generally strong and focused when your face was visible on screen. At [00:27], you maintained a steady gaze towards your intended audience (off-camera), conveying personal engagement. Similarly, at [02:04], your direct eye contact with the camera created a good connection. Although there was a period at [04:16] where your face wasn't visible due to a product close-up, this was a necessary and appropriate part of the demonstration.",
    improvement_suggestion: "Continue to leverage your strong direct eye contact. When you transition from demonstrating a product feature (where your gaze might naturally be on the product) back to addressing the customer directly, make a conscious effort to re-establish eye contact smoothly and promptly to maintain continuous engagement."
  },
  body_language: {
    score: 3,
    justification: "Your body language was professional and aligned with your overall neat appearance at [00:27] and [02:24]. However, there were moments that could be improved for greater impact. For instance, at [07:38], your hands were clasped, which can sometimes come across as a closed-off posture and reduce dynamism. While generally composed, ensuring a consistently open and relaxed stance throughout the pitch would further enhance your communication.",
    improvement_suggestion: "Strive for a consistently open and welcoming posture. Be mindful of your hand positioning; aim to keep them visible and use them naturally to gesture and emphasize points, rather than letting them remain clasped or hidden. This will project greater openness and confidence in your interactions."
  },
  gestures: {
    score: 4,
    justification: "You used gestures effectively to support your verbal explanations, especially during product demonstrations. At [00:27], your open and slightly raised hand was a natural and inviting gesture, setting a positive tone. Your precise pointing at [02:24] was excellent for illustrating specific features and guiding the customer's attention. However, there were periods, like at [07:38], where active gesturing was absent, making the presentation less dynamic during those specific moments.",
    improvement_suggestion: "Continue utilizing your hands to illustrate key features and benefits, ensuring they are always visible. Be aware of moments when your hands might become static, and consciously re-engage them in purposeful, natural gestures to maintain visual interest and reinforce your message throughout the entire pitch."
  },
  appearance: {
    score: 5,
    justification: "Your appearance was exemplary, demonstrating a high degree of professionalism and cultural appropriateness for a retail sales environment in Tamil Nadu. As noted at [00:27] and [02:24], you were neatly dressed in culturally respectful attire, well-groomed, and your hair was tidy. This polished presentation undoubtedly contributes significantly to building trust and credibility with your customers, a crucial aspect of South Indian business communication.",
    improvement_suggestion: "Your standard of appearance is excellent. Continue to maintain this high level of professionalism and cultural sensitivity, as it is a significant asset in your customer interactions."
  },
  dynamic_delivery_analysis: {
    highlights: "Your delivery was strong in demonstrating confidence and expertise. At [00:27], your initial greetings were accompanied by an open gesture and steady eye contact, setting a welcoming tone. Your clear and varied vocal tone helped maintain engagement, even with a quicker pace. For example, at [02:24], you expertly used gestures to point out specific product features while clearly explaining their benefits, directly linking visual demonstration with technical knowledge. Your professional appearance throughout, as seen at [00:27] and [02:24], consistently added to your credibility.",
    lowlights: "While generally dynamic, there were moments where the pacing of information, particularly in the longer feature explanations like [27.7-104.9], felt quite fast, potentially rushing the listener through details. Visually, at [07:38], your hands were clasped, which reduced the dynamism and open nature of your body language. Although necessary for demonstration, prolonged periods with your face out of frame (as at [04:16]) mean a reliance solely on vocal cues, making it even more critical to vary pace and tone during those moments."
  },
  overall_summary: "Your pitch was delivered with strong technical knowledge and impressive confidence. You effectively demonstrated product features, often linking them to customer needs. Your appearance was impeccable, fostering trust. However, the pace of your speech was consistently fast, which sometimes made the delivery feel rushed and could hinder a listener's ability to fully absorb the information. While your gestures were often purposeful, there were moments when your body language became less dynamic, such as when your hands were clasped. Culturally, South Indian communication often values a more measured pace for conveying respect and ensuring comprehension, which could be an area for subtle refinement.",
  final_improvement_suggestion: "Focus on strategically slowing down your speaking pace during critical explanations to enhance clarity and allow customers more time to process information. Actively use open and expressive gestures consistently throughout your presentation to amplify your message and avoid static body language. Before introducing a feature, explicitly state the customer's potential challenge or 'pain point' to frame your solution more powerfully and connect deeply with their needs.",
  key_coaching_takeaway: "Balance your enthusiastic pace with thoughtful pauses; let your expertise breathe and fully resonate with your customer."
};
