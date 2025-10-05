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
  "pitch_adherence": {
    "score": 5,
    "justification": "You followed a clear and structured pitch, starting with an introduction and then systematically explaining features like Steam Wash, Aqua Jet Pulsator, and Cascade Waterfall. You then moved on to differentiating features like Hygiene Rinse, Super Dry, and customizable programs, concluding with warranty and finance options. This systematic approach ensured you covered all important aspects without deviating from the topic.",
    "improvement_suggestion": "Your structure was excellent. To make it even more engaging, consider using a brief agenda upfront or clear verbal transitions between major sections to smoothly guide the customer through the information. For example, 'Next, let's look at how our product solves common laundry challenges.'"
  },
  "confidence": {
    "score": 4,
    "justification": "Your voice carried good energy and a varied tone throughout the pitch, which helped keep the listener engaged and indicated confidence. For instance, your detailed explanations of features like the Aqua Jet Pulsator (00:59-01:18) and Zero Pressure Technology (05:15-05:48) were delivered with a clear and assured tone. Visually, strong, open gestures at 01:36 and 02:02 also conveyed self-assurance. However, your very quick speaking pace might occasionally give the impression of rushing, which could subtly detract from the perceived confidence in certain moments.",
    "improvement_suggestion": "Practice slowing down slightly during key feature explanations or competitive comparisons. Strategic pauses can help emphasize important points and allow your natural confidence to shine through, giving the customer a moment to absorb the valuable information."
  },
  "technical_knowledge": {
    "score": 5,
    "justification": "You demonstrated exceptional technical knowledge, explaining complex features in great detail and often with specific measurements. For example, at 00:59-01:18, you precisely described the Aqua Jet Pulsator's diameter and depth. You clearly differentiated your product from competitors by highlighting unique benefits like the Steam Wash (00:30-00:42) and the superior Zero Pressure Technology (05:15-05:48), showcasing a deep understanding of both your product and the market offerings.",
    "improvement_suggestion": "Continue to leverage your deep product knowledge. To make it even more impactful, consider translating some of the highly technical specifications into direct, relatable benefits for the customer. For instance, instead of just stating dimensions, explain what that larger diameter means for their clothes (e.g., 'more thorough cleaning for bulky items')."
  },
  "customer_pain_points_connection": {
    "score": 4,
    "justification": "You did a good job connecting product features to common customer concerns. For instance, you addressed reducing fabric creases with Steam Wash (02:00-02:17), tackling tough stains with the Cascade Waterfall (01:19-01:36), and preventing fabric damage with your model's larger holes compared to competitors (02:17-02:36). Crucially, the mention of Zero Pressure Technology (05:15-05:48) directly addresses a common issue of low water pressure in many South Indian homes.",
    "improvement_suggestion": "To enhance this connection further, try to explicitly frame each feature as a direct solution to a customer problem. For example, you could start with a question like, 'Are you tired of clothes coming out wrinkled?' and then introduce the Steam Wash feature as the answer. This proactive problem-solving approach resonates strongly with customers."
  },
  "active_demonstration": {
    "score": 4,
    "justification": "You used vivid verbal descriptions and purposeful gestures to explain how features work. For example, at 00:53, you clearly explained how the gravity drum 'pulls fabric down.' Visually, at 01:36 and 02:02, you effectively used your hands in an open, illustrative manner, appearing to point out features or indicate size, which actively helped visualize the product's benefits.",
    "improvement_suggestion": "While your verbal descriptions are strong, incorporating more direct, physical interaction with the machine could boost engagement significantly. Physically demonstrate opening the lid, showing the pulsator, or pointing to specific control panel options. This hands-on approach helps customers truly 'see' and understand the benefits."
  },
  "eye_contact": {
    "score": 3,
    "justification": "You started strongly with direct and consistent eye contact with the camera at 00:10, which is excellent for engaging your audience. However, there were moments where your face was not visible (e.g., at 02:28), making it impossible to assess eye contact and leading to an inconsistent impression. Maintaining consistent eye contact is crucial for building rapport and trust.",
    "improvement_suggestion": "Ensure you stay fully within the camera frame throughout your presentation to maintain continuous visual engagement. When physically demonstrating, remember to periodically return your gaze to the camera or your customer to reinforce that personal connection."
  },
  "body_language": {
    "score": 3,
    "justification": "Your posture was generally average, as noted in the visual analysis summary. While you used some effective gestures, your overall body language could be more consistently open and inviting to convey maximum confidence and approachability.",
    "improvement_suggestion": "Focus on maintaining an open and confident stance, with shoulders back and an engaged posture. Avoid leaning or appearing overly casual. An open posture signals approachability and confidence, which is highly valued in South Indian customer interactions."
  },
  "gestures": {
    "score": 4,
    "justification": "You used gestures effectively to illustrate your points, as seen at 01:36 where your hands were slightly raised, and at 02:02 where you used both hands in an open, illustrative manner to indicate size or comparison. These gestures clearly supported your verbal explanations. However, at 05:43, your hands were clasped in front, which was a missed opportunity to emphasize important financial details or other key points.",
    "improvement_suggestion": "Continue to use purposeful, open gestures to highlight key features and benefits, ensuring they are consistent throughout your pitch, especially when discussing important numbers or comparisons. Be mindful of clasped hands, as they can sometimes convey a closed-off impression, which we want to avoid."
  },
  "appearance": {
    "score": 4,
    "justification": "Your appearance was professional and appropriate for a retail environment in Tamil Nadu. Your attire (checked shirt and dark trousers) at 01:36 was neat and well-groomed, which contributes positively to your professional image and helps build trust with customers. Even though only a portion of your attire was visible at 02:28, the overall impression was positive.",
    "improvement_suggestion": "Maintain your current high standards of neatness and professional dress. A consistent, polished appearance reinforces credibility and demonstrates respect for the customer, which is very important in the local cultural context."
  },
  "dynamic_delivery_analysis": {
    "highlights": "Your pitch was highly energetic, with a consistently varied tone that kept the audience engaged. You used clear, detailed explanations for features like the Aqua Jet Pulsator (00:59-01:18) and Zero Pressure Technology (05:15-05:48). Visually, you made excellent direct eye contact at 00:10 and employed strong, illustrative gestures at 01:36 and 02:02, which effectively supported your verbal points. Your professional and neat appearance at 01:36 also added to your credibility.",
    "lowlights": "Your speaking pace was very fast, which, while energetic, might have made it challenging for the audience to fully absorb all the detailed information, especially during competitive comparisons. Visually, there were moments of inconsistent eye contact, particularly when your face was not visible at 02:28. Additionally, at 05:43, a lack of active gestures (hands clasped) meant missed opportunities to emphasize important financial details."
  },
  "overall_summary": "You delivered a very informative and energetic pitch, demonstrating exceptional technical knowledge and a strong understanding of your product's unique selling points compared to competitors. Your voice had good energy and variation, and you effectively used gestures to explain features. You made good efforts to connect features to customer needs, which resonates well in the local market. However, your very quick speaking pace occasionally risked overwhelming the listener with information, and visual consistency in terms of eye contact and active body language could be improved for maximum impact.",
  "final_improvement_suggestion": "To truly elevate your pitch, focus on strategically pacing your delivery by incorporating brief pauses, especially when introducing new features or complex comparisons. This allows customers time to process and internalize the information. Visually, ensure continuous direct eye contact and maintain an open, expressive body language throughout the presentation, consistently using purposeful gestures to highlight key benefits rather than just occasionally.",
  "key_coaching_takeaway": "Speak with purpose and show with presence – every detail and every gesture matters for connection."
};
