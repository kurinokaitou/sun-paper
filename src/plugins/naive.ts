import type { App } from 'vue';
import {
  create,
  NBadge,
  NBreadcrumb,
  NBreadcrumbItem,
  NButton,
  NBackTop,
  NCard,
  NCheckbox,
  NColorPicker,
  NConfigProvider,
  NCollapse,
  NCollapseItem,
  NCountdown,
  NDataTable,
  NDescriptions,
  NDescriptionsItem,
  NDialogProvider,
  NDivider,
  NDrawer,
  NDrawerContent,
  NDropdown,
  NEmpty,
  NForm,
  NFormItem,
  NGradientText,
  NGrid,
  NGridItem,
  NIcon,
  NInput,
  NInputGroup,
  NInputNumber,
  NImage,
  NList,
  NListItem,
  NLoadingBarProvider,
  NModal,
  NMenu,
  NMessageProvider,
  NNotificationProvider,
  NPopover,
  NRadio,
  NRadioGroup,
  NScrollbar,
  NSelect,
  NSkeleton,
  NSpace,
  NStatistic,
  NSwitch,
  NSpin,
  NPopselect,
  NTabs,
  NTab,
  NTabPane,
  NTag,
  NThing,
  NTimeline,
  NTimelineItem,
  NTooltip,
  NPageHeader,
  NAvatar,
  NAnchor,
  NAnchorLink,
  NH1,
  NText,
  NUpload,
  NCarousel,
  NCarouselItem,
  NRate,
  NSlider,
  NResult,
  NDynamicTags,
} from 'naive-ui';

/** 按需引入naiveUI */
export default function setupNaiveUI(app: App) {
  const naive = create({
    components: [
      NAvatar,
      NBadge,
      NBackTop,
      NBreadcrumb,
      NBreadcrumbItem,
      NButton,
      NCard,
      NCheckbox,
      NColorPicker,
      NConfigProvider,
      NCollapse,
      NCollapseItem,
      NCountdown,
      NCarousel,
      NCarouselItem,
      NDataTable,
      NDescriptions,
      NDescriptionsItem,
      NDialogProvider,
      NDivider,
      NDrawer,
      NDrawerContent,
      NDropdown,
      NEmpty,
      NForm,
      NFormItem,
      NGradientText,
      NGrid,
      NGridItem,
      NIcon,
      NInput,
      NInputGroup,
      NInputNumber,
      NImage,
      NList,
      NListItem,
      NLoadingBarProvider,
      NModal,
      NMenu,
      NMessageProvider,
      NNotificationProvider,
      NPopover,
      NPageHeader,
      NRadio,
      NRadioGroup,
      NRate,
      NScrollbar,
      NSelect,
      NSkeleton,
      NSpace,
      NStatistic,
      NSwitch,
      NSpin,
      NSlider,
      NPopselect,
      NTabs,
      NTab,
      NTabPane,
      NTag,
      NThing,
      NTimeline,
      NTimelineItem,
      NTooltip,
      NAnchor,
      NAnchorLink,
      NH1,
      NText,
      NUpload,
      NCarousel,
      NCarouselItem,
      NResult,
      NDynamicTags,
    ],
  });
  app.use(naive);
}
