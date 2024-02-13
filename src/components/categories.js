import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { categoryData } from '../constants'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { CachedImage } from '../helpers/image';
import { useNavigation } from '@react-navigation/native';

export default function Categories({ categories, activeCategory, handleChangeCategory }) {
  const navigation = useNavigation();

  const handle = () => {
    console.log("object");
    navigation.navigate('categories');
  };

  return (
    <Animated.View entering={FadeInDown.duration(500).springify()}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {categories.map((cat, index) => {
          const isActive = cat.strCategory === activeCategory;
          const activeButtonClass = isActive ? 'bg-amber-400' : 'bg-black/10';

          return (
            <TouchableOpacity
              key={index}
              onPress={() => handleChangeCategory(cat.strCategory)}
              className="flex items-center space-y-1"
            >
              <View className={`rounded-full p-[6px] ${activeButtonClass}`}>
                <CachedImage
                  uri={cat.strCategoryThumb}
                  style={{ width: hp(6), height: hp(6) }}
                  className="rounded-full"
                />
              </View>
              <Text style={{ fontSize: hp(1.6) }} className="text-neutral-600">
                {cat.strCategory}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </Animated.View>
  );
}
