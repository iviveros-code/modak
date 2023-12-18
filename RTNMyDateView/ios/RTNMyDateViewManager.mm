#import <React/RCTLog.h>
#import <React/RCTUIManager.h>
#import <React/RCTViewManager.h>

@interface RTNMyDateViewManager : RCTViewManager
@end

@implementation RTNMyDateViewManager

RCT_EXPORT_MODULE(RTNMyDateView)

RCT_EXPORT_VIEW_PROPERTY(onDatePicked, RCTDirectEventBlock)

@end